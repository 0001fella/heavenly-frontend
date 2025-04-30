import React from "react";
import { Link } from "react-router-dom";

// Components
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
import MusicPlayer from "./MusicPlayer";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center py-20 px-4 md:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/Logo.png"
              alt="Heavenly Rhythms Logo"
              className="h-24 w-auto object-contain drop-shadow-lg"
            />
          </div>

          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Welcome to Heavenly Rhythms
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Where music meets creativity and innovation
          </p>
          <Link to="#about">
            <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-yellow-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Music Production</h3>
              <p className="text-gray-300">
                High-quality music production for artists and labels.
              </p>
            </div>
            <div className="service-card p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Recording Studio</h3>
              <p className="text-gray-300">
                Fully equipped studio for all your recording needs.
              </p>
            </div>
            <div className="service-card p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Mixing & Mastering</h3>
              <p className="text-gray-300">
                Get your tracks mixed and mastered to perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-yellow-400">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            <div className="testimonial">
              <p className="text-lg text-gray-300 italic">
                "Heavenly Rhythms took my music to the next level!"
              </p>
              <p className="font-semibold text-white">John Doe, Artist</p>
            </div>
            <div className="testimonial">
              <p className="text-lg text-gray-300 italic">
                "A top-notch studio with exceptional sound quality!"
              </p>
              <p className="font-semibold text-white">Jane Smith, Producer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <Booking />

      {/* Music Player Section */}
      <MusicPlayer />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Homepage;
