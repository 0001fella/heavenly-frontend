import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden text-white flex items-center justify-center" aria-label="Hero Section">
      {/* Sliding Backgrounds */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1.2 }}
            style={{ backgroundImage: `url(${imageList[currentImage]})` }}
          />
        </AnimatePresence>
        {/* Constant Overlay (NOT fading out!) */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl bg-black/40 backdrop-blur-md rounded-xl py-10" data-aos="zoom-in">
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
