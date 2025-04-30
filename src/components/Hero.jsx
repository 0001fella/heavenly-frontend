import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for styles

function Hero({ backgroundImage = "/studio1.jpg", heroText = "Welcome to Heavenly Rhythms " }) {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing of the animation
      once: true, // Animation will only happen once when it enters the viewport
    });

    // Cleanup AOS on component unmount
    return () => {
      AOS.refresh(); // Optional: Refresh AOS if needed
    };
  }, []);

  return (
    <section
      className="text-white py-24 px-6 text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#000",
      }}
      data-aos="fade-up" // Fade-up animation when the section comes into view
      aria-label="Hero Section"
    >
      {/* Visually hidden text for accessibility */}
      <span className="sr-only">A recording studio with a modern, stylish ambiance</span>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Logo placed in the top-right corner */}
      <div className="absolute top-6 right-6">
        <img src="/Logo.png" alt="Heavenly Rhythms Logo" className="h-12 md:h-16" />
      </div>

      <div
        className="relative max-w-4xl mx-auto animate-fade-in bg-black/60 p-10 rounded-xl"
        data-aos="zoom-in" // Zoom-in animation for the inner div
        data-aos-delay="200" // Slight delay for the zoom effect
      >
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
          data-aos="fade-down" // Fade-down animation for the heading
          data-aos-delay="400" // Delay to give a smooth reveal
          aria-live="polite" // Announce hero text changes for screen readers
        >
          {heroText}
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 text-gray-300 opacity-90 sm:text-lg"
          data-aos="fade-up" // Fade-up animation for the paragraph
          data-aos-delay="600"
        >
          Where your sound becomes legendary — record, mix, master, and create in style.
        </p>
        <a
          href="#booking"
          className="bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 transform"
          data-aos="fade-up" // Fade-up animation for the button
          data-aos-delay="800"
          aria-label="Book a Session Now"
        >
          Book a Session Now
        </a>
      </div>

      {/* Add a subtle floating effect for a more modern look */}
      <div
        className="absolute bottom-10 left-0 right-0 text-center"
        data-aos="fade-up" // Fade-up effect for the floating text
        data-aos-delay="1000"
      >
        <a
          href="#booking"
          className="text-yellow-400 font-semibold text-sm hover:underline animate-pulse"
          aria-label="Don’t miss your chance! Book now!"
        >
          Don’t miss your chance! Book now!
        </a>
      </div>
    </section>
  );
}

export default Hero;
