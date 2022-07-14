import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import logo from "../media/csi-logo.png";

function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-between h-screen p-4 overflow-y-hidden bg-black heropattern-circuitboard-gray-900">
        <img src={logo} className="w-16 h-16 mt-1 lg:w-24 lg:h-24" alt="" />

        <div className="flex items-center ">
          <Hero />
        </div>
        <div>
          <Socials />
          <h1 className="mt-4 text-xs text-center text-white font-poppins ">
            Built and Maintained by{" "}
            <span className="font-bold underline decoration-wavy">Akshit</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
