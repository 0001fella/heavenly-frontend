import React from "react";

const galleryImages = [
  { src: "/studio1.jpg", title: "Studio Session", tags: ["Recording", "Live"] },
  { src: "/studio2.jpg", title: "Creative Vibes", tags: ["Inspiration", "Vibes"] },
  { src: "/session1.jpg", title: "Artist in Action", tags: ["Performance", "Energy"] },
  { src: "/gear.jpg", title: "Studio Gear", tags: ["Equipment", "Tech"] },
  { src: "/mixing.jpg", title: "Mixing in Progress", tags: ["Mixing", "Studio"] },
  { src: "/lights.jpg", title: "Ambience", tags: ["Lighting", "Mood"] },
];

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14 text-gray-800">Studio Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <div key={i} className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">{img.title}</h3>
                <p className="text-sm text-gray-500">{img.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
