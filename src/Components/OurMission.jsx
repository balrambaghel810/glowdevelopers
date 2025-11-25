import React from "react";
import { CheckCircle, Code, Globe, Rocket } from "lucide-react";
// import heroImg from "../assets/hero.png"; // <-- replace with your image path
import img from "../assets/bgwaves.jpg"

const OurMission = () => {
  return (
    <div className="w-full px-6 md:px-16 py-12 relative overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 sm:gap-10">

        {/* LEFT IMAGE */}
        <div className="flex-shrink-0">
          <div className="w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-lg">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/abt2.png"
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We aim to empower businesses through modern, high-performance and visually
            stunning websites. Our team blends creativity, technology and strategy to
            deliver digital experiences that help brands grow online.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-1 sm:gap-3">
              <Globe className="text-orange-500 w-5 h-5 mt-1" />
              <span>Building responsive and SEO-friendly websites</span>
            </li>

            <li className="flex items-start gap-1 sm:gap-3">
              <Code className="text-orange-500 w-5 h-5 mt-1" />
              <span>Creating custom web applications with clean, scalable code</span>
            </li>

            <li className="flex items-start gap-1 sm:gap-3">
              <Rocket className="text-orange-500 w-5 h-5 mt-1" />
              <span>Delivering fast-loading, high-performance web solutions</span>
            </li>

            <li className="flex items-start gap-1 sm:gap-3">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
              <span>Providing reliable support and long-term maintenance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
