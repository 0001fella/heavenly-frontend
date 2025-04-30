import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email.");
    alert(`Subscribed with: ${email}`);
    setEmail(""); // Reset
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-yellow-400">Heavenly Rhythms</h3>
            <p className="text-gray-300 mt-2">
              A creative space for music production, mixing, mastering, and recording.
              We bring your musical vision to life with professional equipment and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-extrabold text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 mt-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-yellow-400">Contact Info</h3>
            <p className="text-gray-300 mt-2">Umoja Three, Chokmart, Nairobi, Kenya</p>
            <p className="text-gray-300">+254 115 572 482</p>
            <p className="text-gray-300">info@heavenlyrhythms.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Socials */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-yellow-400 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-yellow-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-yellow-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-gray-300 hover:text-yellow-400 transition">
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Newsletter */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none w-64"
              aria-label="Email for newsletter"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>&copy; 2025 Heavenly Rhythms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
