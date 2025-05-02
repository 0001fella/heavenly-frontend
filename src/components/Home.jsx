import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-blue-900 min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Welcome to Heavenly Rhythms
          </h1>
          <p className="text-base sm:text-lg mb-6 text-blue-200">
            Discover a space where music, creativity, and divine inspiration come together.
          </p>
          <Link
            to="/pricing"
            className="bg-yellow-400 text-black text-lg py-3 px-8 rounded-full hover:bg-yellow-500 transition"
          >
            Book Now
          </Link>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-gray-800">
        <motion.div
          className="max-w-6xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-yellow-400">
            Our Featured Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service Card */}
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Recording</h3>
              <p className="text-sm text-blue-200">
                From singles to albums, our recording service captures your best sound with precision.
              </p>
              <Link
                to="/pricing"
                className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Mixing & Mastering */}
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Mixing & Mastering</h3>
              <p className="text-sm text-blue-200">
                Transform your tracks with our professional mixing and mastering services for that polished sound.
              </p>
              <Link
                to="/pricing"
                className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Production */}
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Production</h3>
              <p className="text-sm text-blue-200">
                Let our creative producers bring your music vision to life with the best in gospel and inspirational genres.
              </p>
              <Link
                to="/pricing"
                className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white text-center">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-yellow-400">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-xs">
              <p className="text-sm text-blue-200 italic">
                "Heavenly Rhythms took my music to the next level. Their mixing and mastering team is outstanding!"
              </p>
              <h3 className="mt-4 text-yellow-400 font-bold">John Doe</h3>
              <p className="text-blue-200">Artist & Producer</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-xs">
              <p className="text-sm text-blue-200 italic">
                "The team at Heavenly Rhythms are professionals. Their recording facilities are top-notch."
              </p>
              <h3 className="mt-4 text-yellow-400 font-bold">Jane Smith</h3>
              <p className="text-blue-200">Gospel Singer</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-xs">
              <p className="text-sm text-blue-200 italic">
                "My production experience here was amazing. They really know how to bring out the best in my music."
              </p>
              <h3 className="mt-4 text-yellow-400 font-bold">Michael Brown</h3>
              <p className="text-blue-200">Songwriter & Music Producer</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
