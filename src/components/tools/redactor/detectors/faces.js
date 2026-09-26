function normalizeBox(box, width, height) {
  const padX = box.width * 0.1;
  const padY = box.height * 0.1;
  const x = Math.max(0, box.x - padX);
  const y = Math.max(0, box.y - padY);
  const right = Math.min(width, box.x + box.width + padX);
  const bottom = Math.min(height, box.y + box.height + padY);
  return { x, y, w: right - x, h: bottom - y };
}

export function createDetector() {
  return {
    id: 'faces',
    label: 'Faces',
    available() {
      return typeof window !== 'undefined' && typeof window.FaceDetector === 'function';
    },
    async detect(image) {
      if (!this.available()) {
        throw new Error('Face detection is not available in this browser. Manual redaction still works.');
      }
      const detector = new window.FaceDetector({ maxDetectedFaces: 40, fastMode: false });
      const results = await detector.detect(image);
      return results.map((result, index) => ({
        id: `faces-${Date.now()}-${index}`,
        ...normalizeBox(result.boundingBox, image.width, image.height),
        kind: 'face',
        source: 'faces',
      }));
    },
  };
}
