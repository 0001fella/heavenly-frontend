import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/studio1.jpg", title: "Studio Vibe" },
  { src: "/studio2.jpg", title: "Creative Space" },
  { src: "/session1.jpg", title: "Recording Session" },
  { src: "/artist1.jpg", title: "Bildad Ogweno" },
  { src: "/artist2.png", title: "Joshua Mbere" },
  { src: "/artist3.png", title: "Elijah Jalogo" },
  { src: "/gear.jpg", title: "Top Gear" },
  { src: "/mixing.jpg", title: "Mixing in Progress" },
  { src: "/mixing1.jpg", title: "Another Mix" },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay title */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-lg">
        {images[index].title}
      </div>
    </section>
  );
};

export default Gallery;
