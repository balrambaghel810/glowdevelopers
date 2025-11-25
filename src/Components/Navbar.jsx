import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Mission", id: "mission" },
    { name: "About Us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact Us", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="w-full shadow-xl sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex cursor-pointer items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-14 object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-blue-900">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="group cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
              <div className="h-[3px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-300 mx-auto rounded"></div>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-blue-900 font-medium">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="group cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
                <div className="h-[3px] w-0 bg-yellow-400 group-hover:w-[20%] transition-all duration-300 rounded"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
