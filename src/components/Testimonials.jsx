import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing AOS CSS

// Initializing AOS in the component
AOS.init({ duration: 1000, once: true });

function Testimonials() {
  const testimonials = [
    {
      name: "Elijah Jalogo",
      feedback:
        "Heavenly Rhythms took my raw vocals and turned them into magic. This place feels like home.",
      rating: 5,
    },
    {
      name: "Joshua Mbere",
      feedback:
        "Top-tier mixing and mastering! Professional vibe and incredible sound engineers.",
      rating: 4,
    },
    {
      name: "Mike Kalambei",
      feedback:
        "I recorded my debut EP here. The creativity and support were off the charts. 100% recommend.",
      rating: 5,
    },
    {
      name: "Sarah D'Angelo",
      feedback:
        "The atmosphere here is amazing. The engineers are skilled, and the gear is top-notch. Couldn’t have asked for a better experience!",
      rating: 4,
    },
    {
      name: "Chris Harmon",
      feedback:
        "I’ve been to many studios, but this one has something special. The sound quality is second to none, and the team makes you feel like family.",
      rating: 5,
    },
    {
      name: "Tina Beck",
      feedback:
        "Heavenly Rhythms was a game-changer for my album. Their attention to detail and innovative approach to sound mixing is unmatched.",
      rating: 5,
    },
  ];

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-400"}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-blue-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12" data-aos="fade-up">
          What Artists Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              data-aos="fade-up"
            >
              <p className="italic text-lg mb-4">"{testimonial.feedback}"</p>
              <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
              <h4 className="font-semibold text-yellow-400">
                — {testimonial.name}
              </h4>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:scale-110"
            data-aos="fade-up"
          >
            See More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
