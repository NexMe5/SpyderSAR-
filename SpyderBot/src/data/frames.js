/**
 * frames.js
 * Dynamically imports all 120 frames from the public/frames directory.
 * Vite serves files in /public at the root, so we build URL strings directly.
 */

const FRAME_COUNT = 120;

export const frames = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${num}.jpg`;
});

export default frames;
