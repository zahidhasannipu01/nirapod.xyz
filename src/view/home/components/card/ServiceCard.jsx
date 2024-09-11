import React from "react";
import Corporate from "../../../../assets/frontend/icon/antivirus.png";
import Residential from "../../../../assets/frontend/icon/person.png";

const ServiceCard = () => {
  return (
    <div className="mx-auto flex justify-center items-center gap-5 mt-5">
      <div className="w-[150px] h-[90px] bg-white flex justify-center items-center flex-col rounded-lg relative cursor-pointer scale-100 hover:scale-105 duration-300">
        <span className="bg-green-600 text-xs px-1 rounded-full absolute -top-1.5 right-0">
          Save 50%
        </span>
        <img src={Corporate} className="w-[40px]" alt="" />
        <p className="text-black font-semibold">Corporate</p>
      </div>
      <div className="w-[150px] h-[90px] bg-white flex justify-center items-center flex-col rounded-lg relative cursor-pointer scale-100 hover:scale-105 duration-300">
        <span className="bg-green-600 text-xs px-1 rounded-full absolute -top-1.5 right-0">
          Save 50%
        </span>
        <img src={Residential} className="w-[40px]" alt="" />
        <p className="text-black font-semibold">Residential</p>
      </div>
    </div>
  );
};

export default ServiceCard;
