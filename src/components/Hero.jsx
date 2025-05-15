import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/studio1.jpg",
  "/studio2.jpg",
  "/studio3.jpg",
]; // Add more images if needed

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
        <img
          src="/Logo.png"
          alt="Heavenly Rhythms Logo"
          className="absolute top-6 right-6 h-12 md:h-16"
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Heavenly Rhythms
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Where your sound becomes legendary — record, mix, master, and create in style.
        </motion.p>

        <motion.a
          href="#booking"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Book a Session Now
        </motion.a>

        <motion.div
          className="absolute bottom-10 text-yellow-400 text-sm font-semibold animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Don’t miss your chance! Book now!
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
