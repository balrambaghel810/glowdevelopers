import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CVP from "../assets/CVP1.png"
import LCP from "../assets/LCP2.png"
import FP3 from "../assets/flipkartP3.png"
import IP4 from "../assets/IP4.png"
import EMP5 from "../assets/EMP5.png"
import PPP6 from "../assets/PPP6.png"
import VP7 from "../assets/VP7.png"






const projects = [
  {
    img: CVP,
    title: "Central Vidhyalaya",
    desc: "A school informatic website developed in HTML, CSS and JS.",
    link: "https://balrambaghel810.github.io/Central-Vidhyalaya/"
  },
  {
    img: LCP,
    title: "Real Estate",
    desc: "A informatic website developed for Real Estate company in Bootstrap.",
    link: "https://balrambaghel810.github.io/LifeCare/"
  },
  {
    img: FP3,
    title: "FlipKart",
    desc: "A dummy web application of flipkart developed in Reactjs.",
    link: "https://flip-kart-clone-cg1g-git-main-karan-kushwahs-projects.vercel.app/dashboard"
  },
  {
    img: IP4,
    title: "Instagram",
    desc: "A dummy web application of Instagram developed in Reactjs",
    link: "https://instagram-clone-4hrf.onrender.com/"
  },
  {
    img: EMP5,
    title: "Employee Management",
    desc: "Web Application to manage the Employee data.",
    link: "https://employeemanagementdashboard.netlify.app/"
  },
  {
    img: PPP6,
    title: "Personal Portfolio",
    desc: "Personal Portfolio by using Reactjs.",
    link: "https://balrambaghelportfolio.netlify.app/"
  },
  {
    img: VP7,
    title: "Text to Voice",
    desc: "A web app to convert the text into voice.",
    link: "https://magicvoice.netlify.app/"
  },
];


const ProjectsSection = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full py-14 px-5 md:px-16 bg-[#F6FBFF]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-[#FF6A2A]">Projects</span>
        </h1>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          Explore our latest IT projects and innovations.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: { slidesPerView: 1 },        // <= 500px
          470: { slidesPerView: 2 },      // 500px - sm
          640: { slidesPerView: 2 },      // sm and above
          1024: { slidesPerView: 4 },     // lg and above
        }}
        className="pb-6"
      >
        {projects.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white h-[380px] rounded-xl shadow-md overflow-hidden border-b-4 border-[#FF6A2A]">
              <img
                src={item.img}
                alt="project"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>


                <button
                  onClick={() => window.open(item.link, "_blank")}
                  className="mt-4 bg-[#FF6A2A] hover:bg-[#e45f23] text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  View Project
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Buttons BELOW SLIDER */}
      <div className="flex justify-center sm:justify-end gap-4 mt-4">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="p-3  group border border-[#e45f23]  rounded-full hover:bg-[#e45f23]"
        >
          <ChevronLeft className="w-5 h-5 text-[#e45f23] group-hover:text-white  " />
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="p-3  group border border-[#e45f23]  rounded-full hover:bg-[#e45f23]"
        >
          <ChevronRight className="w-5 h-5 text-[#e45f23] group-hover:text-white  " />
        </button>
      </div>



    </div>
  );
};

export default ProjectsSection;
