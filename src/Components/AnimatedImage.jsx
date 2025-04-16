import React, { useState, useEffect } from "react";
import "./AnimatedImage.css";

const AnimatedImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Images from public folder - Vite uses base URL automatically
  const images = [
    {
      src: "/images/studio.png", // Direct path works in Vite
      alt: "Rotating image",
    },
    {
      src: "/images/Bugatti.png",
      alt: "Pulsing image",
    },
    {
      src: "/images/future.png",
      alt: "Sliding image",
    },
    {
      src: "/images/ethical.png",
      alt: "Bouncing image",
    },
  ];

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-wrapper ${index === activeIndex ? "active" : ""}`}
          data-animation-type={index}
        >
          <img
            src={image.src} // Removed process.env.PUBLIC_URL
            alt={image.alt}
            className={`animated-image image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedImage;
