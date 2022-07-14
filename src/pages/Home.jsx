import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import { FaCode } from "react-icons/fa";

function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center h-screen p-4 bg-black heropattern-circuitboard-gray-900 ">
        <img
          src="https://www.csinmamit.in/images/csilogo.png"
          className="w-16 h-16 mt-1 lg:w-24 lg:h-24"
          alt=""
        />
        <FaCode className="fixed w-20 h-20 text-white bottom-7 lg:bottom-6 opacity-10" />
        <div className="flex items-center h-[80vh]">
          <Hero />
        </div>
        <Socials />
      </div>
    </>
  );
}

export default Home;
