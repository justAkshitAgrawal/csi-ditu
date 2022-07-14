import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Socials from "../components/Socials";

function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-between h-screen p-4 overflow-y-hidden bg-black heropattern-circuitboard-gray-900">
        <img
          src="https://www.csinmamit.in/images/csilogo.png"
          className="w-16 h-16 mt-1 lg:w-24 lg:h-24"
          alt=""
        />
        <div className="flex items-center ">
          <Hero />
        </div>
        <Socials />
      </div>
    </>
  );
}

export default Home;
