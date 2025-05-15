import React, { useState } from "react";

const galleryImages = [
  { src: "/studio1.jpg", title: "Studio Session", tags: ["Recording", "Live"] },
  { src: "/studio2.jpg", title: "Creative Vibes", tags: ["Inspiration", "Vibes"] },
  { src: "/session1.jpg", title: "Artist in Action", tags: ["Performance", "Energy"] },
  { src: "/gear.jpg", title: "Studio Gear", tags: ["Equipment", "Tech"] },
  { src: "/mixing.jpg", title: "Mixing in Progress", tags: ["Mixing", "Studio"] },
  { src: "/lights.jpg", title: "Ambience", tags: ["Lighting", "Mood"] },
];

const allTags = [...new Set(galleryImages.flatMap((img) => img.tags))];

const Gallery = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredImages =
    selectedTag === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.tags.includes(selectedTag));

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} py-20 px-6 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Studio Gallery</h2>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-500 transition"
          >
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setSelectedTag("All")}
            className={`px-4 py-2 rounded-full font-medium border ${
              selectedTag === "All"
                ? "bg-yellow-400 text-black"
                : "bg-transparent border-gray-400 text-gray-500"
            } hover:bg-yellow-300 hover:text-black`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-medium border ${
                selectedTag === tag
                  ? "bg-yellow-400 text-black"
                  : "bg-transparent border-gray-400 text-gray-500"
              } hover:bg-yellow-300 hover:text-black`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
              <div
                className={`p-4 ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                }`}
              >
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-sm opacity-70">{img.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
