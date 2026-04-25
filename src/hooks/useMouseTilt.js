import { useState, useCallback } from "react";

/**
 * Returns mouse-tilt handlers and the current tilt angles (x, y).
 * Pass `intensity` (default 12) to control the max rotation degree.
 *
 * Usage:
 *   const { tilt, handleMove, handleLeave, handleEnter, hovered } = useMouseTilt(ref, 10);
 */
export function useMouseTilt(ref, intensity = 12) {
  const [tilt, setTilt]       = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -intensity;
      const y = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  intensity;
      setTilt({ x, y });
    },
    [ref, intensity]
  );

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  const handleEnter = useCallback(() => setHovered(true), []);

  return { tilt, hovered, handleMove, handleLeave, handleEnter };
}
