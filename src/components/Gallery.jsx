import React, { useState } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showNext = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const showPrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section id="gallery" className="bg-black text-white py-16 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
        Gallery & Portfolio
      </h2>

      {/* Auto-scrolling container */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            whiteSpace: "nowrap",
          }}
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[200px] relative cursor-pointer"
              onClick={() => openModal(index % images.length)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded text-sm text-white">
                {img.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              src={images[selectedIndex].src}
              alt="Full view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl bg-black bg-opacity-50 px-4 py-2 rounded-full"
            >
              ✕
            </button>
            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-6 text-white text-4xl bg-black bg-opacity-50 px-3 py-2 rounded-full"
            >
              &lt;
            </button>
            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-6 text-white text-4xl bg-black bg-opacity-50 px-3 py-2 rounded-full"
            >
              &gt;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
