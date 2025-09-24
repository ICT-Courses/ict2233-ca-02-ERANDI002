//scr/pages/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    console.log('Form data:', formData);
    setFormStatus('Thank you for your message! I will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-16"
  >
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Contact Me</h1>
        <p className="text-lg text-gray-400 mb-8">
          Feel free to reach out to me via the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition duration-300 flex justify-center items-center"
          >
            <FaPaperPlane className="mr-2" /> Send Message
          </button>
        </form>

        {formStatus && <p className="mt-4 text-center text-gray-400">{formStatus}</p>}

