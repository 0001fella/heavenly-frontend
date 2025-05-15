import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const imageList = [
  "/studio1.jpg",
  "/studio2.jpg",
  "/session1.jpg",
  "/gear.jpg",
  "/mixing.jpg",
];

function Hero({ heroText = "Welcome to Heavenly Rhythms" }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen text-white text-center overflow-hidden flex items-center justify-center"
      aria-label="Hero Section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${imageList[currentImage]})`,
          zIndex: -1,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div
        className="relative z-10 max-w-4xl mx-auto px-6 py-16 bg-black/40 rounded-xl backdrop-blur-sm"
        data-aos="fade-right"
      >
        <img src="/Logo.png" alt="Heavenly Rhythms Logo" className="h-16 mb-6 mx-auto" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">{heroText}</h1>
        <p className="text-xl text-gray-200">
          Where your sound becomes legendary — record, mix, master, and create in style.
        </p>
      </div>
    </section>
  );
}

export default Hero;
