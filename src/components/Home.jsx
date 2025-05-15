import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <section className="py-24 px-6 bg-blue-50">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-blue-700">Your Sound, Elevated</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700">
            At Heavenly Rhythms, we blend cutting-edge tech with creative freedom to bring your sound to life. Whether you're recording your first gospel track or producing your next hit, we provide a sanctuary where sound meets soul.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-14 text-blue-700">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Studio Recording",
                desc: "Capture your best vocals and instruments in a pro sound environment.",
              },
              {
                title: "Mix & Master",
                desc: "Finalize your track for streaming, radio, and live performance.",
              },
              {
                title: "Custom Beats",
                desc: "We cook gospel, Afrobeat, trap, drill — whatever fits your sound.",
              },
              {
                title: "Voice Overs",
                desc: "Ad spots, intros, voice acting — smooth delivery, clean audio.",
              },
              {
                title: "Artist Coaching",
                desc: "We coach your voice, lyrics, and confidence in the booth and on stage.",
              },
              {
                title: "Live Band Sessions",
                desc: "Bring your whole crew. Full-band recording with perfect mic placement.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-blue-100 text-blue-900 p-6 rounded-xl shadow hover:shadow-lg hover:bg-blue-200 transition-all"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Studio Feature Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/studio2.jpg" alt="Studio Vibe" className="rounded-xl shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Creative Energy, Real Results</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our space isn’t just pro-level — it’s built for creators to feel inspired. From lighting to layout, every corner is tuned to elevate your workflow. Bring the fire, we’ll capture the heat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-14 text-blue-700">Client Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                quote: "Their energy and sound quality are unmatched. I keep coming back.",
                name: "Joshua Kimani",
                role: "Gospel Artist",
              },
              {
                quote: "Recording here leveled up my whole sound. It’s a vibe every time.",
                name: "Diana Nduta",
                role: "Singer/Songwriter",
              },
              {
                quote: "Mixing was clean, fast, and professional. I’d recommend to any serious artist.",
                name: "Terry Mbugua",
                role: "Producer",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-blue-100 p-6 rounded-xl shadow text-left">
                <p className="italic mb-4 text-sm">"{testimonial.quote}"</p>
                <h3 className="font-bold text-blue-800">{testimonial.name}</h3>
                <p className="text-sm text-blue-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
