import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Logo from "../../../../assets/frontend/logo/sheba.svg";
import Facebook from "../../../../assets/frontend/icon/facebook.png";
import Google from "../../../../assets/frontend/icon/google.png";
import Register from "../register/Register";
import Bangladesh from "../../../../assets/frontend/icon/bangladesh.png";
const PhoneRegister = ({ handleCancel, handleCloseMobile }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleClose = () => {
    handleCancel();
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    handleCloseMobile();
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };
  const elevenDigit = PhoneNumber.length === 11 ? true : false;
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/20 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out  opacity-100">
      {showRegister && (
        <Register
          handleCloseRegister={handleCloseRegister}
          handleCancel={handleCancel}
        />
      )}
      <div className="bg-white relative p-6 rounded-md shadow-md w-[550px] h-[450px] flex justify-center items-center transform transition-all duration-300 ease-out scale-95">
        <button
          onClick={handleClose}
          className="absolute -top-4 text-3xl -right-3 bg-white rounded-full text-rose-600 cursor-pointer"
        >
          <MdCancel />
        </button>
        <div className="">
          <div className="flex justify-center items-center flex-col">
            <img className="w-[150px]" src={Logo} alt="" />
            <p className="mt-3 text-md text-black/70 font-medium">
              Login with Mobile Number
            </p>
          </div>
          <div className="mt-3 flex justify-center items-center border rounded-lg">
            <div className="w-[50px]">
              <img
                className="w-full h-full object-cover"
                src={Bangladesh}
                alt=""
              />
            </div>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full py-2 px-2 focus:outline-none  border-l"
              placeholder="Enter Mobile Number e.g 017********"
            />
          </div>
          <div className="mt-3">
            <button
              disabled={!elevenDigit}
              className={`w-full py-2 border bg-yellow-600/80 text-white rounded-lg text-sm text-black/70 font-semibold dis ${
                !elevenDigit &&
                "disabled:cursor-not-allowed disabled:bg-gray-400"
              }`}
            >
              <div className="">
                {!elevenDigit ? "Enter correct number" : "Send OTP"}
              </div>
            </button>
          </div>
          <div className="mt-5 flex justify-center items-center gap-2">
            <p className="text-sm text-black/70">
              Don’t have an account in Nirapod.xyz?
            </p>
            <button
              onClick={handleShowRegister}
              className="px-4 border text-sm py-1 rounded-lg text-yellow-600 border-yellow-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneRegister;
