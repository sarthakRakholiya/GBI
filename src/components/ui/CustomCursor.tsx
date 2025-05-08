import React, { useEffect, useState } from "react";

interface CustomCursorProps {
  size?: number;
  color?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  size = 140,
  color = "#FF4B4B",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick != null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    const showCursor = () => setIsVisible(true);
    const hideCursor = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  // Continuous rotation animation
  useEffect(() => {
    const rotate = () => {
      setRotation((prev) => (prev + 1.5) % 360); // smoother + faster
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

  if (!isVisible) return null;

  const scale = isPointer ? 1.2 : 1;
  const cursorSize = size * scale;

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        pointerEvents: "none",
        transform: `translate(-50%, -50%)`,
        zIndex: 9999,
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    >
      <svg
        width={cursorSize}
        height={cursorSize}
        viewBox="0 0 100 100"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center center",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={color}
          strokeWidth="4"
          fill="none"
        />
        {/* Inner ring */}
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        {/* Center hub (bigger) */}
        <circle cx="50" cy="50" r="10" fill={color} />
        {/* Bearing balls - placed midway between inner and outer rings */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const r = 35; // midway between 25 and 45
          const cx = 50 + r * Math.cos(rad);
          const cy = 50 + r * Math.sin(rad);
          return <circle key={i} cx={cx} cy={cy} r="4.5" fill={color} />;
        })}
      </svg>
    </div>
  );
};

export default CustomCursor;
