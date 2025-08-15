import React, { useState, useEffect, useRef } from "react";
import "./LazyMascot.scss";

interface LazyMascotProps {
  className?: string;
}

const LazyMascot: React.FC<LazyMascotProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (mascotRef.current) {
      observer.observe(mascotRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay for smooth animation
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (mascotRef.current) {
        const rect = mascotRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate relative mouse position from mascot center
        const relativeX = event.clientX - centerX;
        const relativeY = event.clientY - centerY;

        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate pupil positions based on mouse position
  const getPupilPosition = (eyeX: number, eyeY: number) => {
    const maxOffset = 2; // Maximum pixel offset for pupils
    const distance = Math.sqrt(
      mousePosition.x * mousePosition.x + mousePosition.y * mousePosition.y
    );
    const maxDistance = 100; // Distance at which pupils reach max offset

    if (distance === 0) return { x: eyeX, y: eyeY };

    const offsetX =
      (mousePosition.x / distance) *
      Math.min(distance / maxDistance, 1) *
      maxOffset;
    const offsetY =
      (mousePosition.y / distance) *
      Math.min(distance / maxDistance, 1) *
      maxOffset;

    return {
      x: eyeX + offsetX,
      y: eyeY + offsetY,
    };
  };

  const leftPupilPos = getPupilPosition(82, 98);
  const rightPupilPos = getPupilPosition(122, 98);

  return (
    <div
      ref={mascotRef}
      className={`hero-mascot ${className} ${isLoaded ? "loaded" : ""}`}
    >
      {isVisible && (
        <div className="mascot-container">
          <svg
            className="mascot-svg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="PEPE Mascot"
          >
            {/* Mascot Body */}
            <circle
              className="mascot-body"
              cx="100"
              cy="120"
              r="60"
              fill="#FFE600"
              stroke="#000"
              strokeWidth="3"
            />

            {/* Mascot Eyes */}
            <circle
              className="mascot-eye left-eye"
              cx="80"
              cy="100"
              r="8"
              fill="#000"
            />
            <circle
              className="mascot-eye right-eye"
              cx="120"
              cy="100"
              r="8"
              fill="#000"
            />

            {/* Mascot Pupils */}
            <circle
              className="mascot-pupil left-pupil"
              cx={leftPupilPos.x}
              cy={leftPupilPos.y}
              r="3"
              fill="#FF00A0"
            />
            <circle
              className="mascot-pupil right-pupil"
              cx={rightPupilPos.x}
              cy={rightPupilPos.y}
              r="3"
              fill="#FF00A0"
            />

            {/* Mascot Mouth */}
            <path
              className="mascot-mouth"
              d="M 70 130 Q 100 150 130 130"
              stroke="#000"
              strokeWidth="3"
              fill="none"
            />

            {/* Mascot Antenna */}
            <line
              className="mascot-antenna"
              x1="100"
              y1="60"
              x2="100"
              y2="40"
              stroke="#000"
              strokeWidth="3"
            />
            <circle
              className="antenna-tip"
              cx="100"
              cy="35"
              r="5"
              fill="#00FFD1"
            />

            {/* Mascot Arms */}
            <line
              className="mascot-arm left-arm"
              x1="50"
              y1="110"
              x2="30"
              y2="90"
              stroke="#000"
              strokeWidth="3"
            />
            <line
              className="mascot-arm right-arm"
              x1="150"
              y1="110"
              x2="170"
              y2="90"
              stroke="#000"
              strokeWidth="3"
            />

            {/* Mascot Hands */}
            <circle
              className="mascot-hand left-hand"
              cx="25"
              cy="85"
              r="8"
              fill="#FFE600"
              stroke="#000"
              strokeWidth="2"
            />
            <circle
              className="mascot-hand right-hand"
              cx="175"
              cy="85"
              r="8"
              fill="#FFE600"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default LazyMascot;
