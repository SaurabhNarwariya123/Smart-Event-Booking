import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-7 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} SmartEvent. All rights reserved.
        </p>

      
        <div className="flex gap-6 text-xl">
          <a href="https://www.linkedin.com/in/saurabh-narwariya-7b64891a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition" >
            <FaLinkedin />
          </a>
          <a href="https://mail.Saurabhnarwariya2019@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition">
            <SiGmail />
          </a>
          <a  href="https://www.instagram.com/saurabh_lodhi_706"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a  href="https://github.com/SaurabhNarwariya123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition" >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
