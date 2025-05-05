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
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phoneNumber, service, date, timeFrom, timeTo, numberOfPeople } = formData;
    if (!name || !email || !phoneNumber || !service || !date || !timeFrom || !timeTo || !numberOfPeople) {
      return "All fields are required.";
    }
    if (!emailRegex.test(email)) return "Enter a valid email address.";
    if (!phoneRegex.test(phoneNumber)) return "Phone number must be 10 digits.";
    if (Number(numberOfPeople) <= 0) return "Number of people must be more than zero.";
    if (timeTo <= timeFrom) return "End time must be after start time.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Server error");
      }

      setSuccess("✅ Booking successful!");
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
    } catch (err) {
      console.error("Booking failed:", err);
      setError("⚠️ Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-section py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-r from-blue-800 to-black text-white">
      <div className="flex justify-center mb-8">
        <img src="/Logo.png" alt="Studio Logo" className="w-40" />
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">
        Elevate Your Sound Experience!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg space-y-6">
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            { label: "Booking Date", name: "date", type: "date" },
            { label: "Booking Time (From)", name: "timeFrom", type: "time" },
            { label: "Booking Time (To)", name: "timeTo", type: "time" },
            { label: "Number of People", name: "numberOfPeople", type: "number" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-semibold mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold mb-1">Choose Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select a service</option>
              <option value="recording">Recording</option>
              <option value="mixing">Mixing</option>
              <option value="mastering">Mastering</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-black hover:from-blue-700 hover:to-black transition duration-300 rounded-md font-semibold text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </button>
        </form>

        <div
          className="relative p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between min-h-[400px]"
          style={{
            backgroundImage: 'url("/artist1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-2xl z-0" />
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
