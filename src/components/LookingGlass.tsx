import React, { Fragment, useEffect, useRef, useState } from "react";
import "./LookingGlass.css";

// ── Mini looking glass for mobile ──────────────────────────────────────────
const MiniGlass = ({ side, offsetX = 0 }: { side: "left" | "right"; offsetX?: number }) => {
  const [showEffect, setShowEffect] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const revealWrapperRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const radius = 120;

  const applyEffect = (x: number, y: number) => {
    const cp = `circle(${radius}px at ${x}px ${y}px)`;
    if (revealWrapperRef.current) {
      revealWrapperRef.current.style.clipPath = cp;
      (revealWrapperRef.current.style as any).webkitClipPath = cp;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${x - radius}px, ${y - radius}px)`;
    }
    setShowEffect(true);
  };

  const clearEffect = () => {
    setShowEffect(false);
    if (revealWrapperRef.current) {
      revealWrapperRef.current.style.clipPath = "circle(0px at -200px -200px)";
      (revealWrapperRef.current.style as any).webkitClipPath = "circle(0px at -200px -200px)";
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      applyEffect(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    };
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      applyEffect(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    };

    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchend", clearEffect);
    return () => {
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", clearEffect);
    };
  }, []);

  const imgStyle: React.CSSProperties =
    side === "left"
      ? { width: "200%", height: "auto", position: "absolute", left: offsetX, top: "50%", transform: "translateY(-50%)" }
      : { width: "200%", height: "auto", position: "absolute", right: -offsetX, top: "50%", transform: "translateY(-50%)" };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden", touchAction: "none" }}
    >
      {/* Base: logo layer */}
      <img src="Banner.png" alt="" style={{ ...imgStyle, zIndex: 0 }} />

      {/* Reveal wrapper — clip-path is in container coords so no offset math needed */}
      <div
        ref={revealWrapperRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          clipPath: "circle(0px at -200px -200px)",
          pointerEvents: "none",
        }}
      >
        <img src="Banner-Under.png" alt="" style={imgStyle} />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: radius * 2,
          height: radius * 2,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.6)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(0,0,0,0.3), 0 0 20px rgba(0,242,234,0.4)",
          pointerEvents: "none",
          zIndex: 2,
          opacity: showEffect ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      />

      {/* Hint */}
      {!showEffect && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3, pointerEvents: "none" }}>
          <span style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "0.9rem",
            fontWeight: 500,
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            background: "rgba(0,0,0,0.35)",
            padding: "6px 14px",
            borderRadius: "999px",
            backdropFilter: "blur(4px)",
          }}>
            Touch to reveal
          </span>
        </div>
      )}
    </div>
  );
};

// ── Main looking glass ─────────────────────────────────────────────────────
const LookingGlass = () => {
  const [showEffect, setShowEffect] = useState(false);
  const revealRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const applyEffect = (x: number, y: number) => {
    const cp = `circle(190px at ${x}px ${y}px)`;
    if (revealRef.current) {
      revealRef.current.style.clipPath = cp;
      (revealRef.current.style as any).webkitClipPath = cp;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${x - 190}px, ${y - 190}px)`;
    }
    if (!showEffect) setShowEffect(true);
  };

  const clearEffect = () => {
    setShowEffect(false);
    if (revealRef.current) {
      revealRef.current.style.clipPath = "circle(0px at -200px -200px)";
      (revealRef.current.style as any).webkitClipPath = "circle(0px at -200px -200px)";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    applyEffect(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <Fragment>
      {/* Mobile: two mini looking glasses */}
      <div id="lg-mobile" className="container-fluid p-0">
        <MiniGlass side="left" offsetX={-10} />
        <MiniGlass side="right" offsetX={10} />
      </div>

      {/* Desktop: full looking glass */}
      <div id="lg" className="container-fluid p-2">
        <div className="row mt-2">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={clearEffect}
            style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden", cursor: "none" }}
          >
            <img src="Banner.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />

            <img
              ref={revealRef}
              src="Banner-Under.png"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1, clipPath: "circle(0px at -200px -200px)", pointerEvents: "none" }}
            />

            <div
              ref={ringRef}
              style={{
                position: "absolute", top: 0, left: 0, width: 380, height: 380, borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.6)",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(0,0,0,0.3), 0 0 20px rgba(0,242,234,0.4)",
                pointerEvents: "none", zIndex: 2, opacity: showEffect ? 1 : 0, transition: "opacity 0.15s ease",
              }}
            />

            {!showEffect && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3, pointerEvents: "none" }}>
                <span style={{
                  color: "rgba(255,255,255,0.85)", fontSize: "1rem", fontWeight: 500, letterSpacing: "0.05em",
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)", background: "rgba(0,0,0,0.35)",
                  padding: "8px 18px", borderRadius: "999px", backdropFilter: "blur(4px)",
                }}>
                  Hover to reveal
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LookingGlass;
