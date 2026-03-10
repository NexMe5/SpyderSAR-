import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useImageSequencePlayer
 * Plays an array of image URLs as a frame-by-frame animation.
 * @param {string[]} frames  - Array of image src URLs in order
 * @param {number}   fps     - Playback speed (default 15)
 * @param {boolean}  enabled - External play/pause flag
 */
export function useImageSequencePlayer(frames, fps = 15, enabled = true) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const rafRef       = useRef(null);
  const lastTimeRef  = useRef(null);
  const indexRef     = useRef(0);
  const enabledRef   = useRef(enabled);
  const playingRef   = useRef(true);

  useEffect(() => { enabledRef.current = enabled; }, [enabled]);

  const interval = 1000 / fps; // ~66.67ms at 15fps

  const tick = useCallback((timestamp) => {
    if (!enabledRef.current || !playingRef.current) {
      lastTimeRef.current = null;
      rafRef.current = requestAnimationFrame(tick);
      return;
    }
    if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    if (delta >= interval) {
      lastTimeRef.current = timestamp - (delta % interval);
      indexRef.current = (indexRef.current + 1) % frames.length;
      setFrameIndex(indexRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [frames.length, interval]);

  useEffect(() => {
    if (!frames || frames.length === 0) return;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick, frames]);

  // Pause when tab hidden
  useEffect(() => {
    const handleVisibility = () => {
      playingRef.current = !document.hidden && isPlaying;
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isPlaying]);

  const play  = useCallback(() => { setIsPlaying(true);  playingRef.current = true;  }, []);
  const pause = useCallback(() => { setIsPlaying(false); playingRef.current = false; }, []);

  // Advance/reverse a set number of frames (used for hover micro-interactions)
  const nudge = useCallback((delta) => {
    indexRef.current = ((indexRef.current + delta) + frames.length) % frames.length;
    setFrameIndex(indexRef.current);
  }, [frames.length]);

  return {
    currentFrameSrc: frames[frameIndex] ?? '',
    frameIndex,
    isPlaying,
    play,
    pause,
    nudge,
  };
}
