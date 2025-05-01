import { backendURL } from "../config";
import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    date: "",
    timeFrom: "",
    timeTo: "",
    numberOfPeople: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("📌 Booking Data Submitted:", formData);

      // Send booking data to the backend
      const apiUrl = import.meta.env.VITE_API_URL;
      fetch(`${apiUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      alert("✅ Booking successful!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        service: "",
        date: "",
        timeFrom: "",
        timeTo: "",
        numberOfPeople: "",
      });

    } catch (error) {
      console.error("❌ Booking error:", error);
      alert("⚠️ Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-section py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-r from-blue-800 to-black text-white">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/Logo.png" alt="Studio Logo" className="w-40" />
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">
        Elevate Your Sound Experience!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg space-y-6">
          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Choose Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              <option value="recording">Recording</option>
              <option value="mixing">Mixing</option>
              <option value="mastering">Mastering</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Booking Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Booking Time (From)</label>
            <input
              type="time"
              name="timeFrom"
              value={formData.timeFrom}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Booking Time (To)</label>
            <input
              type="time"
              name="timeTo"
              value={formData.timeTo}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Number of People</label>
            <input
              type="number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-black hover:from-blue-700 hover:to-black transition duration-300 rounded-md font-semibold text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </button>
        </form>

        {/* Why Book With Us */}
        <div
          className="relative p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between min-h-[400px]"
          style={{
            backgroundImage: 'url("/artist1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-2xl z-0"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Why Book With Us?</h3>
            <ul className="list-disc pl-5 space-y-3 text-white/90">
              <li>State-of-the-art studio equipment</li>
              <li>Professional sound engineers</li>
              <li>Affordable, flexible pricing</li>
              <li>Personalized customer support</li>
              <li>Fast turnaround and quality service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
