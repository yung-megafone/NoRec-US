export const DETECTORS = [
  {
    id: 'faces',
    label: 'Faces',
    description: 'Finds face locations for masking; it does not identify people. Uses the browser FaceDetector API when available.',
  },
  {
    id: 'emails',
    label: 'Email addresses',
    description: 'Uses the browser TextDetector API when available.',
  },
];

const LOADERS = {
  faces: () => import('./faces.js'),
  emails: () => import('./emails.js'),
};

export async function loadDetector(id) {
  const loader = LOADERS[id];
  if (!loader) throw new Error(`Unknown detector: ${id}`);
  const mod = await loader();
  return mod.createDetector();
}
