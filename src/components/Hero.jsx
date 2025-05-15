import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-yellow-100 text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">Why Choose Heavenly Rhythms?</h2>
          <p className="text-lg mb-10 text-gray-700">
            We're not just a studio — we're a sanctuary for sound. Whether you’re laying down
            your first track or mastering an album, we’ve built a space where your creativity
            thrives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pro-Level Equipment", desc: "Industry-standard gear to capture your sound flawlessly." },
              { title: "Creative Ambience", desc: "Inspiring environment designed for true artistic expression." },
              { title: "Expert Engineers", desc: "Work with people who live and breathe audio perfection." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 px-6 bg-yellow-50">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10 text-yellow-700">Studio Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/studio1.jpg",
              "/studio2.jpg",
              "/gear.jpg",
              "/mixing.jpg",
              "/session1.jpg",
            ].map((img, i) => (
              <img key={i} src={img} alt={`studio-${i}`} className="rounded-xl shadow-md hover:scale-105 transition" />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10 text-yellow-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Raymond O.", role: "Lead Engineer", desc: "Crafting the perfect mix with over a decade in the game." },
              { name: "Sarah K.", role: "Vocal Producer", desc: "Bringing emotion and polish to every performance." },
              { name: "Dre L.", role: "Creative Director", desc: "Visionary behind the vibes, from sound to setup." },
            ].map((person, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-semibold text-yellow-700">{person.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{person.role}</p>
                <p className="text-gray-600">{person.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section (No button) */}
      <section className="py-20 text-center bg-yellow-100 text-yellow-900">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Create Magic?</h2>
          <p className="text-lg">
            Walk into our studio and walk out with greatness. Heavenly Rhythms is your launchpad.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Heavenly Rhythms. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
