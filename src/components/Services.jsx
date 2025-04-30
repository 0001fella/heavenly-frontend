import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrophoneAlt, FaHeadphonesAlt, FaMusic } from 'react-icons/fa';

function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Services Section */}
        <h2 className="text-4xl font-bold mb-14 text-white">Our Kingdom Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Recording Service */}
          <motion.div
            className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaMicrophoneAlt className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-blue-100">Recording</h3>
            <p className="text-sm text-blue-200">
              Our professional studio setup features high-quality microphones, acoustically treated rooms, and state-of-the-art equipment.
            </p>
            <p className="text-sm text-blue-200 mt-2">
              Whether you're recording a single track or an entire album, we ensure your sound is pure and vibrant, capturing every nuance.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">Book a Session</button>
          </motion.div>

          {/* Mixing & Mastering Service */}
          <motion.div
            className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaHeadphonesAlt className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-blue-100">Mixing & Mastering</h3>
            <p className="text-sm text-blue-200">
              Our mixing and mastering services deliver that radio-ready sound you desire, making your tracks shine with professional polish.
            </p>
            <p className="text-sm text-blue-200 mt-2">
              From tightening up your mix to applying finishing touches for clarity and punch, our experts bring your vision to life.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">Get Started</button>
          </motion.div>

          {/* Production Service */}
          <motion.div
            className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaMusic className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-blue-100">Production</h3>
            <p className="text-sm text-blue-200">
              Collaborate with talented producers who are passionate about creating high-quality music that speaks to the heart.
            </p>
            <p className="text-sm text-blue-200 mt-2">
              We specialize in gospel music production that inspires and glorifies God, taking your musical ideas to new heights.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">Work With Us</button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
