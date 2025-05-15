import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen text-white text-center overflow-hidden flex items-center justify-center" aria-label="Hero Section">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageList[currentImage]})`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 py-16 bg-black/50 rounded-xl backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <img src="/Logo.png" alt="Heavenly Rhythms Logo" className="h-16 mb-6 mx-auto" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">{heroText}</h1>
        <p className="text-xl text-gray-300 mb-8">
          Where your sound becomes legendary — record, mix, master, and create in style.
        </p>
        <a
          href="#booking"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Book a Session Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
