import React, { useEffect, useState } from "react";
import herosection from "../assets/herosection.png"
import hero2 from "../assets/hero2.png"


const HeroSection = () => {
  const [skill1, setSkill1] = useState(0);
  const [skill2, setSkill2] = useState(0);

  // Animate progress bars
  useEffect(() => {
    setTimeout(() => setSkill1(85), 300); // 85%
    setTimeout(() => setSkill2(70), 300); // 70%
  }, []);

  return (
    <section className="w-full bg-[#F3FAFF] py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-4 sm:gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-600 leading-tight">
            Welcome to <br />
            <span className="bg-gradient-to-r from-[#ff8317] to-[#d55b10] bg-clip-text text-transparent">
              Glow Developers
            </span>

          </h2>

          <p className="mt-4 pl-4  border-l-4 border-l-[#ff8317] text-gray-600 leading-relaxed">
            We empower businesses with innovative digital solutions.
            From software to website development , we help companies grow with
            powerful and modern technology.
          </p>

          {/* PROGRESS BAR - 1 */}
          <div className="mt-8 relative">

            <p className="absolute top-2 text-sm sm:text-xl left-4 font-medium text-gray-200">
              Website Development
            </p>

            <div className="w-full bg-gray-200 rounded-2xl h-10 sm:h-12 mt-5 overflow-hidden">
              <div
                className="bg-blue-600 h-10 sm:h-12 rounded-2xl transition-all duration-[2000ms]"
                style={{ width: `${skill1}%` }}
              ></div>
            </div>

          </div>


          {/* PROGRESS BAR - 2 */}

          <div className="mt-8 relative">

            <p className="absolute top-2 text-sm sm:text-xl  left-4 font-medium text-gray-200">
              Software Development
            </p>

            <div className="w-full bg-gray-200 rounded-2xl  h-10 sm:h-12 mt-5 overflow-hidden">
              <div
                className="bg-green-500 h-10 sm:h-12 rounded-2xl transition-all duration-[2000ms]"
                style={{ width: `${skill2}%` }}
              ></div>
            </div>

          </div>
        </div>

        {/* RIGHT main image SECTION */}
        <div className="w-[90%] sm:w-[80%] md:w-[50%] relative flex justify-center">
          <img
            src={herosection}
            alt="IT Team"
            className="rounded-3xl  w-full "
          />


          {/* Floating Mini Image 2 */}
          <img
            src={hero2}
            alt="work"
            className="absolute bottom-4 left-1  sm:left-16 w-12 h-12 sm:w-28 sm:h-28 animate-bounce-slow "
          />



        </div>
      </div>
    </section>
  );
};

export default HeroSection;
