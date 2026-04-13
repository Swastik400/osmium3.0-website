"use client";

import { useRef, useState, useCallback } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  zoom?: number;
  lensSize?: number;
  imageSrc?: string;
}

export function MagnifyZone({
  children,
  className = "",
  style,
  zoom = 2,
  lensSize = 180,
  imageSrc,
}: Props) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);

  const handleEnter = useCallback(() => {
    const el = zoneRef.current;
    if (!el) return;

    setSize({ w: el.offsetWidth, h: el.offsetHeight });

    // Always try to get the actual rendered src from the DOM img
    const img = el.querySelector("img");
    if (img) {
      // For Next.js Image: use currentSrc (the actual loaded source) or src
      const actualSrc = img.currentSrc || img.src;
      if (actualSrc) {
        setResolvedSrc(actualSrc);
        setShow(true);
        return;
      }
    }

    // Fallback to imageSrc prop
    if (imageSrc) {
      setResolvedSrc(imageSrc);
      setShow(true);
    }
  }, [imageSrc]);

  const handleLeave = useCallback(() => {
    setShow(false);
  }, []);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = zoneRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const half = lensSize / 2;

  return (
    <div
      ref={zoneRef}
      className={`relative ${className}`}
      style={{ ...style, cursor: show && resolvedSrc ? "none" : undefined }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      {children}

      {show && resolvedSrc && (
        <>
          <div
            className="pointer-events-none absolute z-[60] rounded-full bg-black/30"
            style={{ width: 6, height: 6, top: pos.y - 3, left: pos.x - 3 }}
          />

          <div
            className="pointer-events-none absolute z-50 rounded-full border-2 border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{
              width: lensSize,
              height: lensSize,
              top: pos.y - half,
              left: pos.x - half,
              backgroundImage: `url(${resolvedSrc})`,
              backgroundSize: `${size.w * zoom}px ${size.h * zoom}px`,
              backgroundPosition: `${-(pos.x * zoom) + half}px ${-(pos.y * zoom) + half}px`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
    </div>
  );
}
