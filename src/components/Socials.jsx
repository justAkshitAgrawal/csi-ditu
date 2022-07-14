import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Hero.css";

function Socials() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 px-4 rounded bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl " />
      <div className="relative px-10 py-1 rounded-lg ">
        <div className="flex items-center space-x-5">
          <a
            href="https://www.instagram.com/csi_ditu/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-white " />
          </a>
          <a
            href="https://twitter.com/csi_dituchapter"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://m.facebook.com/CSI-DITU-Student-Chapter-291769358281687/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
