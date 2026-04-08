"use client";

import { useRef, useState, useCallback } from "react";
import html2canvas from "html2canvas";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  zoom?: number;
  lensSize?: number;
}

export function MagnifyZone({
  children,
  className = "",
  style,
  zoom = 2,
  lensSize = 180,
}: Props) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [snapshot, setSnapshot] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });
  const capturing = useRef(false);

  const handleEnter = useCallback(async () => {
    const el = zoneRef.current;
    if (!el) return;

    setSize({ w: el.offsetWidth, h: el.offsetHeight });
    setShow(true);

    if (!capturing.current) {
      capturing.current = true;
      try {
        const canvas = await html2canvas(el, {
          useCORS: true,
          scale: zoom,
          backgroundColor: null,
          logging: false,
        });
        setSnapshot(canvas.toDataURL());
      } catch {
        // silently fail — lens just won't show
      }
      capturing.current = false;
    }
  }, [zoom]);

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
      style={{ ...style, cursor: show && snapshot ? "none" : undefined }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      {children}

      {show && snapshot && (
        <>
          {/* Tiny cursor dot */}
          <div
            className="pointer-events-none absolute z-[60] rounded-full bg-black/30"
            style={{ width: 6, height: 6, top: pos.y - 3, left: pos.x - 3 }}
          />

          {/* Magnifying lens */}
          <div
            className="pointer-events-none absolute z-50 rounded-full border-2 border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{
              width: lensSize,
              height: lensSize,
              top: pos.y - half,
              left: pos.x - half,
              backgroundImage: `url(${snapshot})`,
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
