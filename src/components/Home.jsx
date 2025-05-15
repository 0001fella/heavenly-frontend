import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-800 to-blue-600 text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800">Your Sound, Elevated</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Heavenly Rhythms, we blend cutting-edge technology with spiritual creativity to bring your sound to life. Whether you're recording your first gospel hit or mixing your 10th album, our studio is your sanctuary of sound.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-blue-700">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-14 text-yellow-300">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Recording Studio",
                desc: "Industry-standard vocal booths and hardware. Get clean, crisp sound with zero noise.",
              },
              {
                title: "Mixing & Mastering",
                desc: "From frequencies to fades, we shape your sound to professional perfection.",
              },
              {
                title: "Beats & Production",
                desc: "Need an exclusive gospel, afrobeats, or trap beat? We got you.",
              },
              {
                title: "Voice Overs",
                desc: "Radio, TV, YouTube intros, ads. Record quality voice overs with pristine clarity.",
              },
              {
                title: "Artist Coaching",
                desc: "One-on-one coaching to grow your vocal skills, stage presence, and confidence.",
              },
              {
                title: "Live Session Recording",
                desc: "Full band recording with mic separation and studio monitoring.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2 text-blue-800">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Studio Vibe Section */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/gear.jpg" alt="Studio Gear" className="rounded-xl shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Studio Vibe</h2>
            <p className="text-lg leading-relaxed">
              It's not just about sound — it’s about **energy**. Our studio is designed to inspire. With ambient lighting, a calm atmosphere, and top-tier equipment, you’ll create like never before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-blue-800 text-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-14 text-yellow-300">What Artists Are Saying</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                quote: "Best mixing I’ve ever had. The track sounded better than I imagined.",
                name: "Faith Mwangi",
                role: "Gospel Artist",
              },
              {
                quote: "The vibe here is unmatched. You walk in nervous, walk out with a hit.",
                name: "Kev Masterpiece",
                role: "Afrobeat Producer",
              },
              {
                quote: "They guided me from writing to mastering. A complete experience.",
                name: "Sarah Wanjiru",
                role: "New Artist",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-blue-900 p-6 rounded-xl shadow-md">
                <p className="italic mb-4 text-sm">"{testimonial.quote}"</p>
                <h3 className="font-bold text-yellow-300">{testimonial.name}</h3>
                <p className="text-sm text-gray-200">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
