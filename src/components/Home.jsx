import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import { FaHeadphones, FaMusic, FaStar, FaMapMarkerAlt, FaMicrophoneAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-700">Why Artists Choose Heavenly Rhythms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { icon: FaMicrophoneAlt, text: "Crystal-clear vocal recording" },
              { icon: FaHeadphones, text: "High-end mixing & mastering gear" },
              { icon: FaMusic, text: "Genre-flexible production team" },
              { icon: FaStar, text: "Trusted by rising and pro-level artists" },
              { icon: FaMapMarkerAlt, text: "Easy-to-reach Nairobi location" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-blue-600 text-3xl mb-4 mx-auto" />
                <p className="text-blue-900 font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Studio Vibes Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["/studio1.jpg", "/studio2.jpg", "/session1.jpg", "/gear.jpg", "/mixing.jpg"].map((img, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} alt="Studio scene" className="w-full h-48 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20 bg-blue-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">🎙️ Announcements</h2>
          <p className="text-lg text-blue-700 mb-4">
            🚨 New package alert: Get 3 studio sessions + 1 free mix for just KES 5,000 this month only!
          </p>
          <p className="text-blue-700">
            📅 Live gospel cypher happening every Saturday — come through & record your freestyle.
          </p>
        </div>
      </section>

      {/* Location / Contact Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/studio2.jpg" alt="Location preview" className="rounded-xl shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-4">Visit Us In Nairobi</h3>
            <p className="text-lg text-gray-700 mb-4">
              Located in the heart of the city, Heavenly Rhythms is easily accessible via matatu, boda, or car. Pull up and bring the heat.
            </p>
            <p className="text-blue-600 font-medium">📍 Tom Mboya Street, Nairobi CBD</p>
            <p className="text-blue-600 font-medium">📞 Call: +254 712 345678</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
