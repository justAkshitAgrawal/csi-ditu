import React from "react";

function ProfileCard({ name, role }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg lg:p-8">
      <img
        src="https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-8.png"
        alt=""
        className="w-20 h-20 lg:w-32 lg:h-32 "
      />
      <div className="mt-4 ">
        <h1 className="text-center lg:text-2xl ">{name}</h1>
        <h1 className="text-center lg:text-2xl ">{role}</h1>
      </div>
    </div>
  );
}

export default ProfileCard;
