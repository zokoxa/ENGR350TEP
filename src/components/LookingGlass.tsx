import React, { Fragment, useState } from "react";
import "./LookingGlass.css";

const LookingGlass = () => {
  const [mousePos, setMousePos] = useState({ x: 300, y: 200 });
  const [showEffect, setShowEffect] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShowEffect(true);
  };

  const handleMouseLeave = () => {
    setShowEffect(false);
  };

  const clipPath = showEffect
    ? `circle(175px at ${mousePos.x}px ${mousePos.y}px)`
    : `circle(0px at -100px -100px)`; // Hide the hole off-screen

  return (
    <Fragment>
      <div id="lg" className="container-fluid p-2">
        <div className="row mt-2">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              overflow: "hidden",
            }}
          >
            {/* Top */}
            <img
              className="img-fluid shadow"
              src="Banner.png"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                objectFit: "cover",
                zIndex: 0,
              }}
            />

            {/* Under */}
            <img
              className="img-fluid"
              src="Banner-Under.png"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                objectFit: "cover",
                zIndex: 1,
                clipPath,
                WebkitClipPath: clipPath,
                transition: "clip-path 0.1s ease, -webkit-clip-path 0.01s ease",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LookingGlass;
