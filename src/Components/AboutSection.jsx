import React from "react";
import { Laptop, Code2, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full px-4 py-4 sm:py-6 bg-[#f4fbff]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose <span className="text-orange-500">Our IT Solutions?</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We deliver innovative, scalable, and secure digital solutions designed
          to help businesses grow in the fast-moving tech environment.
        </p>

        {/* Cards Wrapper */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 transition-all hover:shadow-orange-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center text-3xl">
                <Laptop className="w-8 h-8 text-gray-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Expert Developers
            </h3>
            <p className="text-gray-600">
              Skilled professionals specializing in modern web, mobile,
              and cloud technologies to deliver high-quality solutions.
            </p>
          </div>

          {/* CARD 2 — MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-12 md:p-14 scale-[1.05] transition-all hover:shadow-orange-300">
            <div className="flex justify-center mb-6">
              <Code2 className="w-8 h-8 text-gray-700" />

            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Custom Software Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              From enterprise-level applications to AI-powered automation,
              we build tailored digital products that transform businesses.
            </p>

            <button className="px-6 py-2 border border-orange-500 rounded-full text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 transition-all hover:shadow-orange-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center text-3xl">
                <ShieldCheck className="w-8 h-8 text-gray-700" />

              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Secure & Scalable
            </h3>
            <p className="text-gray-600">
              We implement top-tier security practices and scalable infrastructures
              to keep your business future-ready and protected.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
