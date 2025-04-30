import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const artists = [
  {
    name: "Bildad Ogweno",
    image: "/artist1.jpg",
    bio: "Bildad Ogweno is a renowned music artist known for his unique sound and deep connection to the culture of music.",
    genres: ["Pop", "Afrobeat", "R&B"],
    contact: "info@bildadmusic.com",
    socials: {
      instagram: "https://www.instagram.com/bildadogweno",
      facebook: "https://www.facebook.com/bildadogweno",
      twitter: "https://twitter.com/bildadogweno",
      whatsapp: "https://wa.me/254115572482",
    },
  },
  {
    name: "Joshua Mbere",
    image: "/artist2.png",
    bio: "Joshua Mbere is a talented musician who specializes in acoustic and indie music. Known for his heartfelt lyrics and unique voice.",
    genres: ["Indie", "Acoustic", "Soul"],
    contact: "info@joshuamusic.com",
    socials: {
      instagram: "https://www.instagram.com/joshuambere",
      facebook: "https://www.facebook.com/joshuambere",
      twitter: "https://twitter.com/joshuambere",
      whatsapp: "https://wa.me/254700000000",
    },
  },
  {
    name: "Elijah Jalogo",
    image: "/artist3.png",
    bio: "Elijah Jalogo is a powerful gospel singer whose voice touches hearts and uplifts souls across the continent.",
    genres: ["Gospel", "Soul"],
    contact: "info@gracenjeri.com",
    socials: {
      instagram: "https://www.instagram.com/gracenjeri",
      facebook: "https://www.facebook.com/gracenjeri",
      twitter: "https://twitter.com/gracenjeri",
      whatsapp: "https://wa.me/254722000000",
    },
  },
];

const genreOptions = ["All", "Pop", "Afrobeat", "R&B", "Indie", "Acoustic", "Soul", "Gospel"];

function ArtistProfile() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const filteredArtists = artists.filter((artist) => {
    const matchesGenre = filter === "All" || artist.genres.includes(filter);
    const matchesSearch = artist.name.toLowerCase().includes(search.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <section
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } py-20 px-4 relative transition-colors duration-500`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Artist Profiles</h2>

        {/* Genre Filter */}
        <div className="text-center mb-8">
          {genreOptions.map((genre) => (
            <button
              key={genre}
              onClick={() => setFilter(genre)}
              className={`px-4 py-2 mx-2 rounded-lg transition duration-300 ${
                filter === genre ? "bg-green-500 scale-110" : "bg-gray-800"
              } text-white`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search artist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-full text-black w-full max-w-md"
          />
        </div>

        {/* Artist Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center mb-16"
            >
              <div className="md:w-1/2">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
                <h3 className="text-2xl font-semibold mb-4">{artist.name}</h3>
                <p className="mb-4">{artist.bio}</p>
                <h4 className="text-xl font-semibold mb-2">Genres:</h4>
                <p className="mb-4">{artist.genres.join(", ")}</p>
                <h4 className="text-xl font-semibold mb-2">Contact:</h4>
                <p className="mb-4">{artist.contact}</p>
                <div className="flex space-x-4 mt-4 text-2xl">
                  <a href={artist.socials.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
                  </a>
                  <a href={artist.socials.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook className="text-blue-600 hover:scale-110 transition-transform" />
                  </a>
                  <a href={artist.socials.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter className="text-blue-400 hover:scale-110 transition-transform" />
                  </a>
                  <a href={artist.socials.whatsapp} target="_blank" rel="noreferrer">
                    <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtistProfile;
