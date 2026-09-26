/*
 * Adapted from creativar/blurrr (ISC)
 * Upstream commit: e5f636a14cdc98de107a81ff31b8569decf8d396
 * NoRec adaptation: local-only processing, no analytics, and opt-in detector suggestions.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import './image-redactor.css';
import { DETECTORS, loadDetector } from './detectors/registry.js';

let nextRegionId = 1;
const clone = (value) => structuredClone(value);

function mulberry32(seed) {
  return () => {
    let a = seed | 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function drawChunky(ctx, x, y, w, h, blockSize, seed) {
  const rng = mulberry32(seed);
  for (let row = 0; row < Math.ceil(h / blockSize); row += 1) {
    for (let col = 0; col < Math.ceil(w / blockSize); col += 1) {
      const value = rng();
      if (value < 0.33) ctx.fillStyle = '#000';
      else if (value < 0.66) ctx.fillStyle = '#fff';
      else continue;
      ctx.fillRect(
        x + col * blockSize,
        y + row * blockSize,
        Math.min(blockSize, w - col * blockSize),
        Math.min(blockSize, h - row * blockSize),
      );
    }
  }
}

function rotPt(px, py, cx, cy, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = px - cx;
  const dy = py - cy;
  return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
}

function pathShape(ctx, shape, x, y, w, h) {
  ctx.beginPath();
  if (shape === 'ellipse') {
    ctx.ellipse(x + w / 2, y + h / 2, Math.max(1, Math.abs(w / 2)), Math.max(1, Math.abs(h / 2)), 0, 0, Math.PI * 2);
  } else if (shape === 'rounded') {
    const radius = Math.min(Math.abs(w), Math.abs(h)) * 0.22;
    ctx.roundRect(x, y, w, h, radius);
  } else {
    ctx.rect(x, y, w, h);
  }
}

function regionCenter(region) {
  return { x: region.x + region.w / 2, y: region.y + region.h / 2 };
}

function getHandles(region) {
  const { x: cx, y: cy } = regionCenter(region);
  const angle = region.rotation || 0;
  const points = {
    tl: [region.x, region.y],
    tr: [region.x + region.w, region.y],
    bl: [region.x, region.y + region.h],
    br: [region.x + region.w, region.y + region.h],
  };
  return Object.fromEntries(Object.entries(points).map(([key, [x, y]]) => [key, rotPt(x, y, cx, cy, angle)]));
}

function rotationHandle(region, distance) {
  const { x: cx, y: cy } = regionCenter(region);
  return rotPt(region.x + region.w / 2, region.y - distance, cx, cy, region.rotation || 0);
}

function deleteHandle(region, distance) {
  const { x: cx, y: cy } = regionCenter(region);
  return rotPt(region.x + region.w, region.y - distance, cx, cy, region.rotation || 0);
}

function pointInsideRegion(point, region) {
  if (region.type === 'brush') {
    const half = region.brushSize / 2;
    for (let i = 0; i < region.points.length; i += 1) {
      const a = region.points[i];
      if (Math.hypot(point.x - a.x, point.y - a.y) <= half) return true;
      if (i === 0) continue;
      const b = region.points[i - 1];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const len2 = dx * dx + dy * dy;
      if (!len2) continue;
      const t = Math.max(0, Math.min(1, ((point.x - b.x) * dx + (point.y - b.y) * dy) / len2));
      if (Math.hypot(point.x - (b.x + t * dx), point.y - (b.y + t * dy)) <= half) return true;
    }
    return false;
  }
  const { x: cx, y: cy } = regionCenter(region);
  const local = rotPt(point.x, point.y, cx, cy, -(region.rotation || 0));
  if (region.shape === 'ellipse') {
    const nx = (local.x - cx) / Math.max(1, region.w / 2);
    const ny = (local.y - cy) / Math.max(1, region.h / 2);
    return nx * nx + ny * ny <= 1;
  }
  return local.x >= region.x && local.x <= region.x + region.w && local.y >= region.y && local.y <= region.y + region.h;
}

function drawBrushMask(ctx, region) {
  if (!region.points.length) return;
  ctx.lineWidth = region.brushSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(region.points[0].x, region.points[0].y);
  for (let i = 1; i < region.points.length; i += 1) ctx.lineTo(region.points[i].x, region.points[i].y);
  if (region.points.length === 1) ctx.lineTo(region.points[0].x + 0.1, region.points[0].y);
  ctx.stroke();
}

function applyRegion(ctx, canvas, region) {
  if (region.type === 'brush') {
    ctx.save();
    ctx.strokeStyle = region.color || '#000';
    drawBrushMask(ctx, region);
    ctx.restore();
    return;
  }
  if (region.w < 2 || region.h < 2) return;

  const source = document.createElement('canvas');
  source.width = canvas.width;
  source.height = canvas.height;
  source.getContext('2d').drawImage(canvas, 0, 0);

  const { x: cx, y: cy } = regionCenter(region);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(region.rotation || 0);
  pathShape(ctx, region.shape, -region.w / 2, -region.h / 2, region.w, region.h);
  ctx.clip();

  if (region.mode === 'redact') {
    ctx.fillStyle = region.color || '#000';
    ctx.fillRect(-region.w / 2, -region.h / 2, region.w, region.h);
  } else if (region.mode === 'erase') {
    ctx.fillStyle = '#fff';
    ctx.fillRect(-region.w / 2, -region.h / 2, region.w, region.h);
  } else {
    ctx.rotate(-(region.rotation || 0));
    ctx.translate(-cx, -cy);
    ctx.filter = `blur(${region.blurAmount || 20}px)`;
    ctx.drawImage(source, 0, 0);
    ctx.filter = 'none';
    if (region.chunky) {
      ctx.translate(cx, cy);
      ctx.rotate(region.rotation || 0);
      drawChunky(ctx, -region.w / 2, -region.h / 2, region.w, region.h, region.chunkSize || 16, region.seed || 1);
    }
  }
  ctx.restore();
}

function drawRegionUi(ctx, region, scale) {
  if (region.type === 'brush') return;
  const { x: cx, y: cy } = regionCenter(region);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(region.rotation || 0);
  ctx.setLineDash([8 * scale, 5 * scale]);
  ctx.lineWidth = 1.5 * scale;
  ctx.strokeStyle = 'rgba(255,255,255,.95)';
  pathShape(ctx, region.shape, -region.w / 2, -region.h / 2, region.w, region.h);
  ctx.stroke();
  ctx.restore();

  const radius = 6 * scale;
  ctx.setLineDash([]);
  for (const point of Object.values(getHandles(region))) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 1.5 * scale;
    ctx.stroke();
  }
  const rotate = rotationHandle(region, 32 * scale);
  ctx.beginPath();
  ctx.arc(rotate.x, rotate.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#111';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.stroke();

  const del = deleteHandle(region, 22 * scale);
  ctx.beginPath();
  ctx.arc(del.x, del.y, radius * 1.25, 0, Math.PI * 2);
  ctx.fillStyle = '#b71c1c';
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `${12 * scale}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('×', del.x, del.y);
}

function imageFromDataUrl(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

export default function ImageRedactor() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const fileRef = useRef(null);
  const imageRef = useRef(null);
  const regionsRef = useRef([]);
  const suggestionsRef = useRef([]);
  const dragRef = useRef(null);
  const cropRef = useRef(null);
  const historyRef = useRef([[]]);
  const historyIndexRef = useRef(0);
  const imageUndoRef = useRef([]);

  const [loaded, setLoaded] = useState(false);
  const [fileName, setFileName] = useState('redacted.png');
  const [mode, setMode] = useState('redact');
  const [shape, setShape] = useState('rect');
  const [blurAmount, setBlurAmount] = useState(20);
  const [chunky, setChunky] = useState(false);
  const [chunkSize, setChunkSize] = useState(16);
  const [brushSize, setBrushSize] = useState(24);
  const [redactColor, setRedactColor] = useState('#000000');
  const [regions, setRegions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [cropping, setCropping] = useState(false);
  const [cropReady, setCropReady] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const [draggingFile, setDraggingFile] = useState(false);
  const [detectors, setDetectors] = useState({ faces: false, emails: false });
  const [suggestions, setSuggestions] = useState([]);
  const [detecting, setDetecting] = useState(false);
  const [detectStatus, setDetectStatus] = useState('');

  const enabledDetectorIds = useMemo(() => Object.entries(detectors).filter(([, enabled]) => enabled).map(([id]) => id), [detectors]);

  const setRegionsLive = (next) => {
    regionsRef.current = next;
    setRegions(next);
  };

  const commitRegions = (next) => {
    const snapshot = clone(next);
    historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
    historyRef.current.push(snapshot);
    if (historyRef.current.length > 60) historyRef.current.shift();
    else historyIndexRef.current += 1;
    setRegionsLive(next);
  };

  const setSuggestionsLive = (next) => {
    suggestionsRef.current = next;
    setSuggestions(next);
  };

  const displayScale = () => {
    const canvas = canvasRef.current;
    if (!canvas) return 1;
    const rect = canvas.getBoundingClientRect();
    return canvas.width / Math.max(1, rect.width);
  };

  const coords = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    if (!showOriginal) {
      for (const region of regionsRef.current) applyRegion(ctx, canvas, region);
    }

    if (!showOriginal) {
      const scale = displayScale();
      for (const suggestion of suggestionsRef.current) {
        ctx.save();
        ctx.setLineDash([7 * scale, 5 * scale]);
        ctx.strokeStyle = '#ffb300';
        ctx.lineWidth = 2 * scale;
        ctx.strokeRect(suggestion.x, suggestion.y, suggestion.w, suggestion.h);
        ctx.fillStyle = 'rgba(255,179,0,.14)';
        ctx.fillRect(suggestion.x, suggestion.y, suggestion.w, suggestion.h);
        ctx.restore();
      }
      const selected = regionsRef.current.find((region) => region.id === selectedId);
      if (selected) drawRegionUi(ctx, selected, scale);
    }

    if (cropping && cropRef.current) {
      const crop = cropRef.current;
      ctx.save();
      ctx.fillStyle = 'rgba(0,0,0,.55)';
      ctx.fillRect(0, 0, canvas.width, crop.y);
      ctx.fillRect(0, crop.y, crop.x, crop.h);
      ctx.fillRect(crop.x + crop.w, crop.y, canvas.width - crop.x - crop.w, crop.h);
      ctx.fillRect(0, crop.y + crop.h, canvas.width, canvas.height - crop.y - crop.h);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2 * displayScale();
      ctx.strokeRect(crop.x, crop.y, crop.w, crop.h);
      ctx.restore();
    }
  };

  useEffect(() => { renderCanvas(); }, [regions, suggestions, selectedId, showOriginal, loaded, cropping]);
  useEffect(() => {
    const onPaste = (event) => {
      for (const item of event.clipboardData?.items || []) {
        if (!item.type.startsWith('image/')) continue;
        const file = item.getAsFile();
        if (file) {
          event.preventDefault();
          loadFile(file);
          return;
        }
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, []);

  useEffect(() => {
    const keydown = (event) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      const editingField = tag === 'input' || tag === 'select' || tag === 'textarea';
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        redo();
      } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        undo();
      } else if (!editingField && (event.key === 'Delete' || event.key === 'Backspace') && selectedId) {
        event.preventDefault();
        deleteSelected();
      } else if (!editingField && event.key === 'Alt') {
        event.preventDefault();
        setShowOriginal(true);
      } else if (event.key === 'Escape') {
        cropRef.current = null;
        setCropReady(false);
        setCropping(false);
        setSelectedId(null);
      }
    };
    const keyup = (event) => { if (event.key === 'Alt') setShowOriginal(false); };
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);
    return () => {
      window.removeEventListener('keydown', keydown);
      window.removeEventListener('keyup', keyup);
    };
  });

  const resetEditingState = () => {
    nextRegionId = 1;
    historyRef.current = [[]];
    historyIndexRef.current = 0;
    imageUndoRef.current = [];
    cropRef.current = null;
    setRegionsLive([]);
    setSuggestionsLive([]);
    setSelectedId(null);
    setCropping(false);
    setCropReady(false);
    setDetectStatus('');
  };

  const loadFile = (file) => {
    if (!file?.type?.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const image = await imageFromDataUrl(String(reader.result));
        imageRef.current = image;
        const canvas = canvasRef.current;
        canvas.width = image.width;
        canvas.height = image.height;
        setFileName(`${file.name.replace(/\.[^.]+$/, '') || 'image'}_redacted.png`);
        resetEditingState();
        setLoaded(true);
      } catch {
        setDetectStatus('Could not open that image.');
      }
    };
    reader.readAsDataURL(file);
  };

  const rasterizeEdits = () => {
    const image = imageRef.current;
    if (!image) return null;
    const out = document.createElement('canvas');
    out.width = image.width;
    out.height = image.height;
    const ctx = out.getContext('2d');
    ctx.drawImage(image, 0, 0);
    for (const region of regionsRef.current) applyRegion(ctx, out, region);
    return out;
  };

  const snapshotImageState = () => {
    if (!imageRef.current) return;
    imageUndoRef.current.push({
      src: imageRef.current.src,
      regions: clone(regionsRef.current),
    });
    if (imageUndoRef.current.length > 20) imageUndoRef.current.shift();
  };

  const restoreImageState = async (snapshot) => {
    const image = await imageFromDataUrl(snapshot.src);
    imageRef.current = image;
    const canvas = canvasRef.current;
    canvas.width = image.width;
    canvas.height = image.height;
    historyRef.current = [clone(snapshot.regions)];
    historyIndexRef.current = 0;
    setRegionsLive(clone(snapshot.regions));
    setSelectedId(null);
    cropRef.current = null;
    setCropping(false);
  };

  const undo = async () => {
    if (historyIndexRef.current > 0) {
      historyIndexRef.current -= 1;
      setRegionsLive(clone(historyRef.current[historyIndexRef.current]));
      setSelectedId(null);
      return;
    }
    const previousImage = imageUndoRef.current.pop();
    if (previousImage) await restoreImageState(previousImage);
  };

  const redo = () => {
    if (historyIndexRef.current >= historyRef.current.length - 1) return;
    historyIndexRef.current += 1;
    setRegionsLive(clone(historyRef.current[historyIndexRef.current]));
    setSelectedId(null);
  };

  const canUndo = historyIndexRef.current > 0 || imageUndoRef.current.length > 0;
  const canRedo = historyIndexRef.current < historyRef.current.length - 1;

  const deleteSelected = () => {
    if (!selectedId) return;
    commitRegions(regionsRef.current.filter((region) => region.id !== selectedId));
    setSelectedId(null);
  };

  const pointerDown = (event) => {
    if (!loaded) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    const point = coords(event);
    const scale = displayScale();

    if (cropping) {
      dragRef.current = { type: 'crop', start: point };
      cropRef.current = null;
      setCropReady(false);
      return;
    }

    const selected = regionsRef.current.find((region) => region.id === selectedId);
    if (selected && selected.type !== 'brush') {
      const del = deleteHandle(selected, 22 * scale);
      if (Math.hypot(point.x - del.x, point.y - del.y) <= 11 * scale) {
        deleteSelected();
        return;
      }
      const rotate = rotationHandle(selected, 32 * scale);
      if (Math.hypot(point.x - rotate.x, point.y - rotate.y) <= 10 * scale) {
        const center = regionCenter(selected);
        dragRef.current = {
          type: 'rotate',
          id: selected.id,
          before: clone(regionsRef.current),
          center,
          startAngle: Math.atan2(point.y - center.y, point.x - center.x),
          originalRotation: selected.rotation || 0,
        };
        return;
      }
      for (const [handle, hp] of Object.entries(getHandles(selected))) {
        if (Math.hypot(point.x - hp.x, point.y - hp.y) > 10 * scale) continue;
        dragRef.current = { type: 'resize', id: selected.id, handle, before: clone(regionsRef.current), original: clone(selected) };
        return;
      }
    }

    for (let i = regionsRef.current.length - 1; i >= 0; i -= 1) {
      const region = regionsRef.current[i];
      if (!pointInsideRegion(point, region)) continue;
      setSelectedId(region.id);
      dragRef.current = { type: 'move', id: region.id, start: point, before: clone(regionsRef.current), original: clone(region) };
      return;
    }

    setSelectedId(null);
    if (mode === 'brush') {
      dragRef.current = { type: 'brush', points: [point] };
    } else {
      dragRef.current = { type: 'draw', start: point, current: point };
    }
  };

  const pointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || !loaded) return;
    const point = coords(event);

    if (drag.type === 'crop') {
      cropRef.current = {
        x: Math.min(drag.start.x, point.x),
        y: Math.min(drag.start.y, point.y),
        w: Math.abs(point.x - drag.start.x),
        h: Math.abs(point.y - drag.start.y),
      };
      renderCanvas();
      return;
    }

    if (drag.type === 'draw') {
      drag.current = point;
      renderCanvas();
      const ctx = canvasRef.current.getContext('2d');
      const x = Math.min(drag.start.x, point.x);
      const y = Math.min(drag.start.y, point.y);
      const w = Math.abs(point.x - drag.start.x);
      const h = Math.abs(point.y - drag.start.y);
      ctx.save();
      ctx.setLineDash([8 * displayScale(), 5 * displayScale()]);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2 * displayScale();
      pathShape(ctx, shape, x, y, w, h);
      ctx.stroke();
      ctx.restore();
      return;
    }

    if (drag.type === 'brush') {
      drag.points.push(point);
      renderCanvas();
      const ctx = canvasRef.current.getContext('2d');
      ctx.save();
      ctx.strokeStyle = redactColor;
      drawBrushMask(ctx, { points: drag.points, brushSize });
      ctx.restore();
      return;
    }

    if (drag.type === 'move') {
      const dx = point.x - drag.start.x;
      const dy = point.y - drag.start.y;
      const next = drag.before.map((region) => {
        if (region.id !== drag.id) return region;
        if (region.type === 'brush') return { ...region, points: region.points.map((p) => ({ x: p.x + dx, y: p.y + dy })) };
        return { ...region, x: drag.original.x + dx, y: drag.original.y + dy };
      });
      setRegionsLive(next);
      return;
    }

    if (drag.type === 'rotate') {
      const angle = drag.originalRotation + Math.atan2(point.y - drag.center.y, point.x - drag.center.x) - drag.startAngle;
      setRegionsLive(drag.before.map((region) => region.id === drag.id ? { ...region, rotation: angle } : region));
      return;
    }

    if (drag.type === 'resize') {
      const o = drag.original;
      const center = regionCenter(o);
      const local = rotPt(point.x, point.y, center.x, center.y, -(o.rotation || 0));
      let left = o.x;
      let top = o.y;
      let right = o.x + o.w;
      let bottom = o.y + o.h;
      if (drag.handle.includes('l')) left = Math.min(local.x, right - 4);
      if (drag.handle.includes('r')) right = Math.max(local.x, left + 4);
      if (drag.handle.includes('t')) top = Math.min(local.y, bottom - 4);
      if (drag.handle.includes('b')) bottom = Math.max(local.y, top + 4);
      const resized = { ...o, x: left, y: top, w: right - left, h: bottom - top };
      setRegionsLive(drag.before.map((region) => region.id === drag.id ? resized : region));
    }
  };

  const pointerUp = (event) => {
    const drag = dragRef.current;
    if (!drag) return;
    const point = loaded ? coords(event) : null;

    if (drag.type === 'draw' && point) {
      const x = Math.min(drag.start.x, point.x);
      const y = Math.min(drag.start.y, point.y);
      const w = Math.abs(point.x - drag.start.x);
      const h = Math.abs(point.y - drag.start.y);
      if (w >= 4 && h >= 4) {
        const region = {
          id: String(nextRegionId++), x, y, w, h,
          type: 'shape', mode, shape, rotation: 0,
          blurAmount, chunky, chunkSize, seed: Math.floor(Math.random() * 2 ** 32), color: redactColor,
        };
        commitRegions([...regionsRef.current, region]);
        setSelectedId(region.id);
      }
    } else if (drag.type === 'brush' && drag.points.length) {
      const region = {
        id: String(nextRegionId++), type: 'brush', points: drag.points,
        brushSize, mode: 'redact', color: redactColor,
      };
      commitRegions([...regionsRef.current, region]);
      setSelectedId(region.id);
    } else if (['move', 'rotate', 'resize'].includes(drag.type)) {
      commitRegions(clone(regionsRef.current));
    } else if (drag.type === 'crop') {
      const crop = cropRef.current;
      const ready = Boolean(crop && crop.w >= 4 && crop.h >= 4);
      if (!ready) cropRef.current = null;
      setCropReady(ready);
      renderCanvas();
    }

    dragRef.current = null;
  };

  const clearRegions = () => {
    historyRef.current = [[]];
    historyIndexRef.current = 0;
    setRegionsLive([]);
    setSuggestionsLive([]);
    setSelectedId(null);
  };

  const removeImage = () => {
    imageRef.current = null;
    setLoaded(false);
    setDetectors({ faces: false, emails: false });
    resetEditingState();
  };

  const transformImage = (transform) => {
    const source = rasterizeEdits();
    if (!source) return;
    snapshotImageState();
    const out = document.createElement('canvas');
    const ctx = out.getContext('2d');
    transform(out, ctx, source);
    imageFromDataUrl(out.toDataURL('image/png')).then((newImage) => {
      imageRef.current = newImage;
      const canvas = canvasRef.current;
      canvas.width = newImage.width;
      canvas.height = newImage.height;
      historyRef.current = [[]];
      historyIndexRef.current = 0;
      setRegionsLive([]);
      setSuggestionsLive([]);
      setSelectedId(null);
      });
  };

  const rotateLeft = () => transformImage((canvas, ctx, image) => {
    canvas.width = image.height; canvas.height = image.width;
    ctx.translate(0, image.width); ctx.rotate(-Math.PI / 2); ctx.drawImage(image, 0, 0);
  });
  const rotateRight = () => transformImage((canvas, ctx, image) => {
    canvas.width = image.height; canvas.height = image.width;
    ctx.translate(image.height, 0); ctx.rotate(Math.PI / 2); ctx.drawImage(image, 0, 0);
  });
  const flipHorizontal = () => transformImage((canvas, ctx, image) => {
    canvas.width = image.width; canvas.height = image.height;
    ctx.translate(image.width, 0); ctx.scale(-1, 1); ctx.drawImage(image, 0, 0);
  });
  const flipVertical = () => transformImage((canvas, ctx, image) => {
    canvas.width = image.width; canvas.height = image.height;
    ctx.translate(0, image.height); ctx.scale(1, -1); ctx.drawImage(image, 0, 0);
  });

  const beginCrop = () => {
    cropRef.current = null;
    setCropReady(false);
    setSelectedId(null);
    setCropping(true);
  };
  const cancelCrop = () => {
    cropRef.current = null;
    setCropReady(false);
    setCropping(false);
    renderCanvas();
  };
  const applyCrop = () => {
    const crop = cropRef.current;
    const canvas = canvasRef.current;
    const source = rasterizeEdits();
    if (!crop || crop.w < 4 || crop.h < 4 || !canvas || !source) return;
    snapshotImageState();
    setSelectedId(null);
    const previousCrop = cropRef.current;
    cropRef.current = null;
    setCropReady(false);
    setCropping(false);
    const out = document.createElement('canvas');
    out.width = Math.round(previousCrop.w);
    out.height = Math.round(previousCrop.h);
    out.getContext('2d').drawImage(
      source,
      Math.round(previousCrop.x), Math.round(previousCrop.y), Math.round(previousCrop.w), Math.round(previousCrop.h),
      0, 0, out.width, out.height,
    );
    imageFromDataUrl(out.toDataURL('image/png')).then((newImage) => {
      imageRef.current = newImage;
      canvas.width = newImage.width;
      canvas.height = newImage.height;
      historyRef.current = [[]];
      historyIndexRef.current = 0;
      setRegionsLive([]);
      setSuggestionsLive([]);
      });
  };

  const exportImage = () => {
    if (!loaded) return;
    const out = rasterizeEdits();
    if (!out) return;
    out.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 0);
    }, 'image/png');
  };

  const toggleDetector = (id) => {
    setDetectors((current) => ({ ...current, [id]: !current[id] }));
  };

  const runDetection = async () => {
    if (!loaded || detecting || !enabledDetectorIds.length) return;
    setDetecting(true);
    setDetectStatus('Scanning with the detectors you enabled…');
    const found = [];
    const errors = [];
    for (const id of enabledDetectorIds) {
      try {
        const detector = await loadDetector(id);
        if (detector.available && !detector.available()) {
          errors.push(`${detector.label}: unavailable in this browser`);
          continue;
        }
        found.push(...await detector.detect(imageRef.current));
      } catch (error) {
        errors.push(error instanceof Error ? error.message : `${id}: detection failed`);
      }
    }
    setSuggestionsLive(found);
    const summary = found.length ? `${found.length} suggestion${found.length === 1 ? '' : 's'} ready for review.` : 'No suggestions found.';
    setDetectStatus(errors.length ? `${summary} ${errors.join(' · ')}` : summary);
    setDetecting(false);
  };

  const suggestionToRegion = (suggestion) => ({
    id: String(nextRegionId++),
    type: 'shape',
    x: suggestion.x,
    y: suggestion.y,
    w: suggestion.w,
    h: suggestion.h,
    mode: mode === 'brush' ? 'redact' : mode,
    shape: 'rect',
    rotation: 0,
    blurAmount,
    chunky,
    chunkSize,
    seed: Math.floor(Math.random() * 2 ** 32),
    color: redactColor,
  });

  const applySuggestion = (id) => {
    const suggestion = suggestionsRef.current.find((item) => item.id === id);
    if (!suggestion) return;
    commitRegions([...regionsRef.current, suggestionToRegion(suggestion)]);
    setSuggestionsLive(suggestionsRef.current.filter((item) => item.id !== id));
  };
  const dismissSuggestion = (id) => setSuggestionsLive(suggestionsRef.current.filter((item) => item.id !== id));
  const applyAllSuggestions = () => {
    if (!suggestionsRef.current.length) return;
    commitRegions([...regionsRef.current, ...suggestionsRef.current.map(suggestionToRegion)]);
    setSuggestionsLive([]);
  };

  return (
    <div className="nr-redactor">
      <div className="nr-redactor__toolbar" aria-label="Image redaction controls">
        <div className="nr-redactor__control-group">
          <label>
            <span>Tool</span>
            <select value={mode} onChange={(event) => setMode(event.target.value)}>
              <option value="redact">Redact</option>
              <option value="blur">Blur</option>
              <option value="erase">Erase</option>
              <option value="brush">Brush</option>
            </select>
          </label>
          {mode !== 'brush' && (
            <label>
              <span>Shape</span>
              <select value={shape} onChange={(event) => setShape(event.target.value)}>
                <option value="rect">Rectangle</option>
                <option value="rounded">Rounded</option>
                <option value="ellipse">Ellipse</option>
              </select>
            </label>
          )}
          {mode === 'blur' && (
            <>
              <label>
                <span>Blur {blurAmount}px</span>
                <input type="range" min="5" max="60" value={blurAmount} onChange={(event) => setBlurAmount(Number(event.target.value))} />
              </label>
              <label className="nr-redactor__check">
                <span>Texture</span>
                <span><input type="checkbox" checked={chunky} onChange={(event) => setChunky(event.target.checked)} /> Chunky</span>
              </label>
              {chunky && (
                <label>
                  <span>Chunk {chunkSize}px</span>
                  <input type="range" min="4" max="48" value={chunkSize} onChange={(event) => setChunkSize(Number(event.target.value))} />
                </label>
              )}
            </>
          )}
          {mode === 'brush' && (
            <label>
              <span>Brush {brushSize}px</span>
              <input type="range" min="4" max="120" value={brushSize} onChange={(event) => setBrushSize(Number(event.target.value))} />
            </label>
          )}
          {(mode === 'redact' || mode === 'brush') && (
            <label className="nr-redactor__color">
              <span>Color</span>
              <input type="color" value={redactColor} onChange={(event) => setRedactColor(event.target.value)} />
            </label>
          )}
        </div>

        <div className="nr-redactor__actions">
          <button type="button" onClick={undo} disabled={!loaded || !canUndo}>Undo</button>
          <button type="button" onClick={redo} disabled={!loaded || !canRedo}>Redo</button>
          <button type="button" onClick={rotateLeft} disabled={!loaded}>↶ Rotate</button>
          <button type="button" onClick={rotateRight} disabled={!loaded}>Rotate ↷</button>
          <button type="button" onClick={flipHorizontal} disabled={!loaded}>Flip H</button>
          <button type="button" onClick={flipVertical} disabled={!loaded}>Flip V</button>
          {!cropping ? (
            <button type="button" onClick={beginCrop} disabled={!loaded}>Crop</button>
          ) : (
            <>
              <button type="button" onClick={applyCrop} disabled={!cropReady}>Apply crop</button>
              <button type="button" onClick={cancelCrop}>Cancel crop</button>
            </>
          )}
          <button type="button" onPointerDown={() => setShowOriginal(true)} onPointerUp={() => setShowOriginal(false)} onPointerLeave={() => setShowOriginal(false)} disabled={!loaded}>Before / after</button>
          <button type="button" onClick={clearRegions} disabled={!loaded || (!regions.length && !suggestions.length)}>Clear</button>
        </div>
      </div>

      <details className="nr-redactor__detect">
        <summary>Automatic detection <span>optional · off by default</span></summary>
        <div className="nr-redactor__detect-body">
          <p>Nothing here runs until you turn on a detector and press <strong>Scan image</strong>. Detector choices are not remembered after you leave or reload this page.</p>
          <div className="nr-redactor__detector-list">
            {DETECTORS.map((detector) => (
              <label key={detector.id} className="nr-redactor__detector-option">
                <input type="checkbox" checked={detectors[detector.id]} onChange={() => toggleDetector(detector.id)} />
                <span><strong>{detector.label}</strong><small>{detector.description}</small></span>
              </label>
            ))}
          </div>
          <div className="nr-redactor__detect-actions">
            <button type="button" onClick={runDetection} disabled={!loaded || detecting || enabledDetectorIds.length === 0}>{detecting ? 'Scanning…' : 'Scan image'}</button>
            {suggestions.length > 0 && <button type="button" onClick={applyAllSuggestions}>Apply all suggestions</button>}
            {suggestions.length > 0 && <button type="button" onClick={() => setSuggestionsLive([])}>Clear suggestions</button>}
          </div>
          {detectStatus && <p className="nr-redactor__status" role="status">{detectStatus}</p>}
          {suggestions.length > 0 && (
            <div className="nr-redactor__suggestions" aria-label="Detection suggestions">
              {suggestions.map((suggestion, index) => (
                <div className="nr-redactor__suggestion" key={suggestion.id}>
                  <span>{index + 1}. {suggestion.kind}{suggestion.label ? ` · ${suggestion.label}` : ''}</span>
                  <div>
                    <button type="button" onClick={() => applySuggestion(suggestion.id)}>Apply</button>
                    <button type="button" onClick={() => dismissSuggestion(suggestion.id)}>Dismiss</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </details>

      <div
        className={`nr-redactor__workspace${draggingFile ? ' is-dragging' : ''}`}
        ref={wrapRef}
        onDragOver={(event) => { event.preventDefault(); setDraggingFile(true); }}
        onDragLeave={() => setDraggingFile(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDraggingFile(false);
          const file = event.dataTransfer.files?.[0];
          if (file) loadFile(file);
        }}
      >
        {!loaded && (
          <button className="nr-redactor__drop" type="button" onClick={() => fileRef.current?.click()}>
            <strong>Drop an image here</strong>
            <span>or click to choose one</span>
            <small>Paste screenshots with Ctrl/Cmd + V.</small>
          </button>
        )}
        <canvas
          ref={canvasRef}
          className={`nr-redactor__canvas${loaded ? '' : ' is-hidden'}`}
          onPointerDown={pointerDown}
          onPointerMove={pointerMove}
          onPointerUp={pointerUp}
          onPointerCancel={pointerUp}
          aria-label="Image editing canvas"
        />
      </div>

      <input ref={fileRef} type="file" accept="image/*" hidden onClick={(event) => { event.currentTarget.value = ''; }} onChange={(event) => loadFile(event.target.files?.[0])} />

      <div className="nr-redactor__footer-actions">
        <button type="button" onClick={() => fileRef.current?.click()}>Open image</button>
        <button className="nr-redactor__save" type="button" onClick={exportImage} disabled={!loaded}>Save redacted PNG</button>
        <button type="button" onClick={removeImage} disabled={!loaded}>Remove image</button>
      </div>
      <p className="nr-redactor__local-note">Image pixels stay local to this browser session. Saving re-encodes the result as PNG rather than copying the source file, so the source file's EXIF metadata is not carried into the export.</p>
    </div>
  );
}
