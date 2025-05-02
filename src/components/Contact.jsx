import React, { useState } from 'react';
import { backendURL } from "../config"; // Make sure backendURL is defined correctly
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300">
          We'd love to hear from you. Whether you’re an artist, producer, or music lover — drop us a message.
        </p>

        <div className="grid gap-8 md:grid-cols-2 text-left mt-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-yellow-400" />
              <a href="mailto:contact@heavenlyrhythms.com" className="text-gray-300 hover:text-white transition">
                contact@heavenlyrhythms.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-yellow-400" />
              <a href="tel:+254700000000" className="text-gray-300 hover:text-white transition">
                +254 748 427 864
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-yellow-400" />
              <p className="text-gray-300">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Success/Failure message */}
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-400 mt-12">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Heavenly Rhythms</span>. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;
