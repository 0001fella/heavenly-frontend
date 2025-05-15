import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Featured Services */}
      <section className="py-24 px-6 bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-14 text-yellow-400">
            Our Featured Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Recording",
                desc: "Capture your best sound — from singles to albums with professional precision.",
              },
              {
                title: "Mixing & Mastering",
                desc: "Get your tracks polished and radio-ready with our high-end tools.",
              },
              {
                title: "Production",
                desc: "Let our producers bring your musical vision to life — gospel, afrobeat, you name it.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2 text-yellow-300">{service.title}</h3>
                <p className="text-sm text-blue-200">{service.desc}</p>
                <Link
                  to="/pricing"
                  className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 text-center bg-gradient-to-b from-black via-gray-900 to-blue-900">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-14 text-yellow-400">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                quote: "Heavenly Rhythms took my music to the next level. Their mixing is fire!",
                name: "John Doe",
                role: "Artist & Producer",
              },
              {
                quote: "Top-notch recording space. Super clean audio and cool vibes.",
                name: "Jane Smith",
                role: "Gospel Singer",
              },
              {
                quote: "They really get gospel music. My album turned out better than I imagined.",
                name: "Michael Brown",
                role: "Music Producer",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-sm text-blue-200 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-yellow-400 font-bold">{testimonial.name}</h3>
                <p className="text-blue-200 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
