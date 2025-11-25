import React from "react";
import { Phone, Clock, MapPin, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="">

          {/* CONTACT US */}
          <h3 className="text-xl font-bold mb-2">Contact us</h3>
          <div className="grid smallscreen grid-cols-2 sm:grid-cols-3 gap-4">

            <div className="flex items-start gap-2 md:gap-3 mb-2">
              <Phone className="text-orange-500 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Call Us</p>
                <p className="text-gray-600">+919977810861</p>
              </div>
            </div>

            <div className="flex items-start gap-2 md:gap-3 mb-2">
              <Clock className="text-orange-500 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Business hours</p>
                <p className="text-gray-600">Mon - Fri || 10 AM - 7 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-2 md:gap-3">
              <MapPin className="text-orange-500 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Indore, M.P.</p>
              </div>
            </div>
          </div>


        </div>

        {/* DIVIDER */}
        <div className="border-t border-blue-100 my-2"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:gap-6 mt-4">
          <p className="text-gray-700 text-sm">
            © Copyrights 2025 Glow Developers Technologies – All rights reserved
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">
            {[Twitter, Facebook, Linkedin].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer"
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

      </div>
      <style jsx>{`
  @media (max-width: 450px) {
    .smallscreen {
     
       grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`}</style>

    </footer>
  );
};

export default Footer;
