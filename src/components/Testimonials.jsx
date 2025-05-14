import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

AOS.init({ duration: 1000, once: true });

function Testimonials() {
  const [formData, setFormData] = useState({ name: "", feedback: "", rating: null });
  const [submitting, setSubmitting] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("/api/testimonials");
      setTestimonials(res.data);
    } catch (error) {
      console.error("Error fetching testimonials", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("/api/testimonials", formData);
      alert("Thanks for your feedback!");
      setFormData({ name: "", feedback: "", rating: null });
      fetchTestimonials();
    } catch (err) {
      console.error("Failed to submit testimonial", err);
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating, setRatingFunc = null) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        onClick={() => setRatingFunc && setRatingFunc(i + 1)}
        className={`cursor-pointer text-2xl ${i + 1 <= rating ? "text-yellow-400" : "text-gray-500"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="bg-gradient-to-r from-blue-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-8" data-aos="fade-up">
          Share Your Experience
        </h2>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-16" data-aos="fade-up">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded text-black"
          />
          <textarea
            name="feedback"
            placeholder="Your Experience"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded text-black"
          />
          <div className="flex items-center mb-4">
            <span className="mr-3">Rating:</span>
            {renderStars(formData.rating, (val) => setFormData((prev) => ({ ...prev, rating: val })))}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full shadow-lg"
          >
            {submitting ? "Submitting..." : "Submit Testimonial"}
          </button>
        </form>

        <h3 className="text-3xl font-semibold text-yellow-400 mb-8 text-center" data-aos="fade-up">
          What Artists Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg" data-aos="fade-up">
              <p className="italic text-lg mb-4">"{t.feedback}"</p>
              <div className="flex justify-center mb-4">{renderStars(t.rating)}</div>
              <h4 className="font-semibold text-yellow-400">— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
