"use client";  // Place this at the top

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="max-w-lg mx-auto px-6 py-16 text-slate-700">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Speak To An Expert
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-slate-50 p-6 rounded-xl shadow-sm"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name *"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email Address *"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Contact Number */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Contact Number *"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Additional Comments *"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
