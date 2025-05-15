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

  // Auto-slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section id="gallery" className="bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
        Gallery & Portfolio
      </h2>

      <div className="relative w-full max-w-5xl mx-auto h-[500px] overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence>
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].title}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 px-6 py-2 rounded text-white text-lg">
          {images[index].title}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
