import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const getLinkClasses = (path) =>
    location.pathname === path
      ? "text-yellow-400 font-bold underline"
      : "hover:text-yellow-400 transition";

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
    { name: "Artists", path: "/artists" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400" aria-label="Go to homepage">
          Heavenly Rhythms
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${getLinkClasses(link.path)}`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/pricing"
            className={`${getLinkClasses("/pricing")} ml-4 bg-gradient-to-r from-blue-600 to-black text-white px-4 py-2 rounded-full hover:opacity-80 transition text-sm shadow-md`}
          >
            Pricing Plans
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="ml-4 bg-gradient-to-r from-blue-600 to-black text-white p-2 rounded-full hover:opacity-80 transition-transform duration-300 scale-105 active:scale-95"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white" aria-label="Toggle Navigation Menu">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-gray-900 backdrop-blur-lg bg-opacity-90 z-40 px-6 py-8 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}  // Close menu when link is clicked
              className={`${getLinkClasses(link.path)} py-2`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}  // Close menu when link is clicked
            className={`${getLinkClasses("/pricing")} block bg-gradient-to-r from-blue-600 to-black text-white px-4 py-2 rounded-full hover:opacity-80 transition shadow-md`}
          >
            Pricing Plans
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-full bg-gradient-to-r from-blue-600 to-black text-white px-4 py-2 rounded-full hover:opacity-80 transition flex items-center justify-center gap-2"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
