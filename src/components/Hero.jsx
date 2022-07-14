import React from "react";
import { FaCode } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 transition-all rounded p-28 lg:p-44 bg-gradient-to-br from-pink-500 to-purple-500 blur-xl lg:blur-2xl background-animate " />
        <div className="relative p-28 lg:p-44 bg-black/95 border-[2px] lg:border-[3px] rounded-tr-lg rounded-l-lg tr">
          <div className="absolute h-[8vh] bg-black lg:w-[15vw] lg:h-[10vh] bottom-0  w-[3vw] -right-1  lg:-right-20 "></div>
          <div className="absolute h-[8vh] bg-black heropattern-circuitboard-gray-900 lg:w-[5vw] lg:h-[10vh] bottom-0  w-[12vw] -right-12  lg:-right-20 "></div>
          <h1 className="absolute text-4xl text-white lg:text-6xl font-poppins left-5 top-8 lg:top-12 ">
            <FaCode className="w-5 h-5 lg:h-7 lg:w-7" />
            CSI <br /> DITU <br />
            <span className="flex items-center mt-3 text-lg lg:text-3xl ">
              Student Chapter
            </span>
            <span className="text-sm lg:text-xl">Technical Club</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
