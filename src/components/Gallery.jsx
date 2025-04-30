import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const [theme, setTheme] = useState("dark");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filterTag, setFilterTag] = useState("All");

  const images = [
    { src: "/studio1.jpg", title: "Studio Vibe", tags: ["Studio", "Vibe"] },
    { src: "/studio2.jpg", title: "Creative Space", tags: ["Studio", "Creative"] },
    { src: "/session1.jpg", title: "Recording Session", tags: ["Session", "Recording"] },
    { src: "/artist1.jpg", title: "Bildad Ogweno", tags: ["Artist"] },
    { src: "/artist2.png", title: "Joshua Mbere", tags: ["Artist"] },
    { src: "/artist3.png", title: "Elijah Jalogo", tags: ["Artist"] },
    { src: "/gear.jpg", title: "Top Gear", tags: ["Gear", "Equipment"] },
    { src: "/mixing.jpg", title: "Mixing in Progress", tags: ["Mixing", "Studio"] },
    { src: "/mixing1.jpg", title: "Mixing in Progress", tags: ["Mixing", "Studio"] },
  ];

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const uniqueTags = ["All", ...new Set(images.flatMap((img) => img.tags))];

  const filteredImages = filterTag === "All"
    ? images
    : images.filter((img) => img.tags.includes(filterTag));

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <section
      id="gallery"
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } py-20 px-4 relative transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/Logo.png"  // Reference image from public folder
            alt="Studio Logo"
            className="h-20 w-auto drop-shadow-lg"
            style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Gallery & Portfolio</h2>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="absolute top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Tag Filters */}
        <div className="text-center mb-8">
          {uniqueTags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 ${
                filterTag === tag ? "bg-green-500 scale-110" : "bg-gray-800"
              } text-white rounded-lg transition duration-300`}
              onClick={() => setFilterTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-lg font-semibold">{img.title}</span>
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                {img.tags.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className={`fixed inset-0 ${
              theme === "dark" ? "bg-black bg-opacity-90" : "bg-white bg-opacity-90"
            } flex items-center justify-center z-50`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              src={images[selectedIndex].src}
              alt="Enlarged"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl z-50"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold bg-black bg-opacity-60 px-4 py-2 rounded-full z-50"
              onClick={closeModal}
            >
              ✕
            </button>

            <button
              className="absolute left-6 text-white text-4xl bg-black bg-opacity-50 px-3 py-2 rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              &lt;
            </button>
            <button
              className="absolute right-6 text-white text-4xl bg-black bg-opacity-50 px-3 py-2 rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              &gt;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
