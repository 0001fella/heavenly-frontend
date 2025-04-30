import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaQuoteLeft, FaUser } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Mission, Vision, Achievements Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Our Mission, Vision, & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Mission</h3>
              <p className="text-sm text-yellow-200">
                To provide a platform where musicians can record, mix, master, and produce music that glorifies God, while ensuring the highest standards of sound quality and creativity.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Vision</h3>
              <p className="text-sm text-yellow-200">
                To become a leading music production studio known for its commitment to excellence in gospel music, uplifting the faith through world-class production and sound engineering.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Achievements</h3>
              <ul className="text-sm text-yellow-200 space-y-2">
                <li>Produced over 100 tracks for gospel artists worldwide.</li>
                <li>Award-winning mixes and productions recognized at local and national levels.</li>
                <li>Collaborated with top artists and producers in the gospel music industry.</li>
                <li>Equipped with state-of-the-art recording and production technology.</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Marquee for "The Visionary" (Owner) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">The Visionary Behind Heavenly Rhythms</h2>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap space-x-12">
              <p className="text-lg font-bold text-yellow-200 mr-8">
                Bildad Ogweno is the visionary and heart behind Heavenly Rhythms Studio. With a passion for creating quality gospel music.
              </p>
              <p className="text-lg font-bold text-yellow-200 mr-8">
                Bildad Ogweno's vision is not only to create music but to foster a community where creativity meets purpose, all while maintaining the highest standards of sound and production.
              </p>
              <p className="text-lg font-bold text-yellow-200 mr-8">
                With years of experience, Bildad is dedicated to ensuring that every artist who steps into Heavenly Rhythms Studio leaves with a polished sound that speaks volumes.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Fun Facts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaAward className="text-4xl text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Award-Winning Sound</h3>
              <p className="text-sm text-yellow-200">
                Heavenly Rhythms Studio has earned numerous awards for excellence in music production and sound engineering.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaQuoteLeft className="text-4xl text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Quotes from Artists</h3>
              <p className="text-sm text-yellow-200">
                "Working with Heavenly Rhythms has taken my music to a new level—truly a game-changer in my career!" — Gospel Artist
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaUser className="text-4xl text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Team</h3>
              <p className="text-sm text-yellow-200">
                A passionate team of music producers, sound engineers, and artists dedicated to creating music that inspires and glorifies God.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
