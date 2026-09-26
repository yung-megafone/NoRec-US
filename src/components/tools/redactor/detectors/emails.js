const EMAIL_RE = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;

export function createDetector() {
  return {
    id: 'emails',
    label: 'Email addresses',
    available() {
      return typeof window !== 'undefined' && typeof window.TextDetector === 'function';
    },
    async detect(image) {
      if (!this.available()) {
        throw new Error('Email detection is not available in this browser. Manual redaction still works.');
      }
      const detector = new window.TextDetector();
      const results = await detector.detect(image);
      const suggestions = [];
      results.forEach((result, index) => {
        const text = result.rawValue || result.text || '';
        if (!EMAIL_RE.test(text)) {
          EMAIL_RE.lastIndex = 0;
          return;
        }
        EMAIL_RE.lastIndex = 0;
        const b = result.boundingBox;
        const pad = Math.max(4, Math.min(b.width, b.height) * 0.08);
        suggestions.push({
          id: `emails-${Date.now()}-${index}`,
          x: Math.max(0, b.x - pad),
          y: Math.max(0, b.y - pad),
          w: Math.min(image.width - Math.max(0, b.x - pad), b.width + pad * 2),
          h: Math.min(image.height - Math.max(0, b.y - pad), b.height + pad * 2),
          kind: 'email',
          confidence: result.confidence,
          source: 'emails',
          label: text,
        });
      });
      return suggestions;
    },
  };
}
