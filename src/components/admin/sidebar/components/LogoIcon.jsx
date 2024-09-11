import React, { useState } from "react";
import logo from "../../../../assets/frontend/logo/sheba.svg";
import { FaArrowLeft } from "react-icons/fa";

const LogoIcon = ({ handleToggle, IsCollapsed }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="w-[150px]">
        <img src={logo} alt="" />
      </div>
      <div
        onClick={handleToggle}
        className={`absolute top-0 -right-7 bg-white drop-shadow-md p-[0.3rem] rounded-full cursor-pointer ${
          IsCollapsed && "rotate-180 text-xs"
        }`}
      >
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default LogoIcon;
