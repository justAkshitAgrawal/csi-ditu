import React from "react";
import Nav from "../components/Nav";
import logo from "../media/csi-logo.png";

function Events() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center h-screen p-4 overflow-y-hidden bg-black heropattern-circuitboard-gray-900">
        <img src={logo} className="w-16 h-16 mt-1 lg:w-24 lg:h-24" alt="" />

        <div className="flex items-center mt-20">
          <h1 className="text-white ">Past Events</h1>
        </div>
      </div>
    </div>
  );
}

export default Events;
