import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full px-4 py-4 flex justify-center bg-[#f3f9ff]">
      <div className="w-full max-w-6xl bg-gradient-to-r from-orange-500 to-yellow-400 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-10 text-white">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get in Touch <br /> With Us
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Have a question or need assistance with our IT services? We're here
            to help. Simply fill out the form and our team will contact you with
            the right solution.
          </p>

          <p className="text-lg leading-relaxed">
            Let’s build something amazing together.
          </p>
        </div>

        {/* RIGHT SIDE (WhatsApp Only) */}
        <form
          action="https://formspree.io/f/xjvnbdbb"
          method="POST"
          className="md:w-1/2 flex flex-col gap-4"
        >
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="username"
              autoComplete="off"
              required
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none"
            />

            <input
              name="email"
              autoComplete="off"
              required
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg text-gray-700 focus:outline-none"
            />
          </div>

          {/* MESSAGE BOX */}
          <textarea
            name="message"
            placeholder="Enter your message here"
            autoComplete="off"
            required
            rows="4"
            className="w-full p-3 rounded-lg text-gray-700 focus:outline-none"
          ></textarea>

          {/* BUTTON */}
          <input
            type="submit"
            value=" Send a message"
            className="bg-blue-700 hover:bg-blue-800 w-fit px-6 py-3 rounded-lg font-semibold text-white transition"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
