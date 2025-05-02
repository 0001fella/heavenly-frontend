import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const services = {
  Recording: [
    { name: "Single Track", desc: "Perfect for individual tracks.", price: 6500 },
    { name: "EP Recording", desc: "For a collection of 3-5 tracks.", price: 32500 },
    { name: "Album Recording", desc: "Full album of 10+ tracks.", price: 65000 },
  ],
  Mixing: [
    { name: "Single Track Mixing", desc: "Great for crisp, clean sound.", price: 9750 },
    { name: "EP Mixing", desc: "3-5 tracks mixed professionally.", price: 45500 },
    { name: "Album Mixing", desc: "Full album mixdown package.", price: 91000 },
  ],
  Mastering: [
    { name: "Single Track Mastering", desc: "Polished, radio-ready sound.", price: 6500 },
    { name: "EP Mastering", desc: "Get your EP ready for distribution.", price: 32500 },
    { name: "Album Mastering", desc: "For 10 or more tracks.", price: 65000 },
  ],
  "Other Services": [
    { name: "Live Performance Recording", desc: "Capture the energy of your show.", price: 39000 },
    { name: "Songwriting Assistance", desc: "Need help with lyrics or melody?", price: 19500 },
  ],
};

const PricingPlans = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#111" : "#f9f9f9";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  return (
    <div className={`p-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow">Pricing Plans</h1>
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <p className="text-lg text-center text-gray-400 mb-8">
        Select a music production service that fits your vibe and start your journey.
      </p>

      {bookingData && (
        <div className="bg-gray-800 p-4 rounded-lg text-yellow-300 text-center shadow-lg mb-10">
          <h3 className="text-xl font-semibold mb-2">Booking Details</h3>
          <p><strong>Name:</strong> {bookingData.name}</p>
          <p><strong>Email:</strong> {bookingData.email}</p>
          <p><strong>Service:</strong> {bookingData.service}</p>
          <p><strong>Date:</strong> {bookingData.date}</p>
        </div>
      )}

      {Object.entries(services).map(([category, plans]) => (
        <div key={category} className="mt-12">
          <h2 className="text-2xl text-yellow-400 mb-4 font-bold">{category}</h2>
          <div className={`grid ${category === "Other Services" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-6`}>
            {plans.map((plan, idx) => (
              <div key={idx} className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-yellow-500/30 transition transform hover:scale-105">
                <h3 className="text-xl font-bold text-yellow-300">{plan.name}</h3>
                <p className="mt-2 text-sm">{plan.desc}</p>
                <p className="font-semibold mt-3">KES {plan.price.toLocaleString()}</p>
                <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
