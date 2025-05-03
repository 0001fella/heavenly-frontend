import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";  // For sending form data to the backend

AOS.init({ duration: 1000, once: true });

function Testimonials() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
    rating: 0,
  });

  const [submitting, setSubmitting] = useState(false);

  const [testimonials, setTestimonials] = useState([]);  // To hold fetched testimonials

  // Fetch testimonials from the backend when component mounts
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("/api/testimonials");
      setTestimonials(res.data);  // Update state with fetched testimonials
    } catch (error) {
      console.error("Error fetching testimonials", error);
    }
  };

  // Fetch testimonials when the page loads
  React.useEffect(() => {
    fetchTestimonials();
  }, []);

  // Function to render stars based on the rating
  const renderStars = (rating, setRatingFunc = null) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setRatingFunc && setRatingFunc(i)}
          className={`cursor-pointer text-2xl ${i <= rating ? "text-yellow-400" : "text-gray-500"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Send testimonial data to backend
      await axios.post("/api/testimonials", formData);
      alert("Thanks for your feedback!");
      setFormData({ name: "", feedback: "", rating: 0 });
      fetchTestimonials();  // Fetch updated testimonials
    } catch (err) {
      console.error("Failed to submit testimonial", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="bg-gradient-to-r from-blue-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-8" data-aos="fade-up">
          Share Your Experience
        </h2>

        {/* Submission Form */}
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

        {/* Static Testimonials */}
        <h3 className="text-3xl font-semibold text-yellow-400 mb-8 text-center" data-aos="fade-up">
          What Artists Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              data-aos="fade-up"
            >
              <p className="italic text-lg mb-4">"{testimonial.feedback}"</p>
              <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
              <h4 className="font-semibold text-yellow-400">— {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
