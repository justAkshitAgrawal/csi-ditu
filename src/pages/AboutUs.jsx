import React from "react";
import Nav from "../components/Nav";
import logo from "../media/csi-logo.png";

function AboutUs() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center h-screen p-4 overflow-y-hidden bg-black heropattern-circuitboard-gray-900">
        <img src={logo} className="w-16 h-16 mt-1 lg:w-24 lg:h-24" alt="" />

        <div className="flex flex-col p-4 mx-10 mt-40 space-y-4 text-sm rounded-lg shadow-sm lg:text-2xl lg:mx-[25vw] shadow-gray-400/50 bg-white/10 font-poppins ">
          <h1 className="text-white ">
            Computer Society of India is the first and largest body of computer
            professionals in India. It was started on 6th March 1965 by a few
            computer professionals and has now grown to be the national body
            representing computer professionals. It has 72 chapters across
            India.
          </h1>
          <h1 className="text-white ">
            Students CSI, DIT chapter has successfully carried out effective
            workshops and events that have enraptured students and proved
            extremely beneficial for them.
          </h1>
          <h1 className="text-white ">
            With the vision of empowering several CSI has been instrumental in
            guiding the Indian IT industry down the right path since its
            formative years. Being part of this esteemed club helps in overall
            enhancement of all its members giving them tons of opportunities and
            assistance to excel in whatever dream they aspire for.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
