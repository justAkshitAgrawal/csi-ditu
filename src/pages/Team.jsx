import React from "react";
import Nav from "../components/Nav";
import ProfileCard from "../components/ProfileCard";
import logo from "../media/csi-logo.png";

function Team() {
  const members = [
    {
      name: "Akshit",
      role: "Head",
    },
    {
      name: "Tandon",
      role: "Tech Head",
    },
    {
      name: "Tandon",
      role: "Tech Head",
    },
    {
      name: "Tandon",
      role: "Tech Head",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center h-screen p-4 overflow-y-hidden bg-black heropattern-circuitboard-gray-900">
        <img src={logo} className="w-16 h-16 mt-1 lg:w-24 lg:h-24" alt="" />
        <div className="grid grid-flow-row grid-cols-2 gap-5 mt-20 lg:mt-40 lg:grid-cols-6 lg:gap-8">
          {members.map((member) => {
            return <ProfileCard name={member.name} role={member.role} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
