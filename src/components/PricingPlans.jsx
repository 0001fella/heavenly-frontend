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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = Object.fromEntries(
      Object.entries(services).map(([category, plans]) => [
        category,
        plans.filter(
          (plan) =>
            plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            plan.desc.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      ])
    );
    setFilteredServices(filtered);
  }, [searchQuery]);

  return (
    <div className="p-6 min-h-screen">
      <input
        type="text"
        placeholder="Search for services"
        value={searchQuery}
        onChange={handleSearchChange}
        className="p-3 mb-6 w-full border border-gray-300 rounded-lg"
      />

      {Object.entries(filteredServices).map(([category, plans]) => (
        <div key={category} className="mt-12">
          <h2 className="text-2xl text-yellow-400 mb-4 font-bold">{category}</h2>
          <div className={`grid ${category === "Other Services" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-6`}>
            {plans.map((plan, idx) => (
              <div key={idx} className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-yellow-500/30 transition transform hover:scale-105">
                <h3 className="text-xl font-bold text-yellow-300">{plan.name}</h3>
                <p className="mt-2 text-sm">{plan.desc}</p>
                <p className="font-semibold mt-3">KES {plan.price.toLocaleString()}</p>
                <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">
                  <Link to="/booking">Book Now</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
