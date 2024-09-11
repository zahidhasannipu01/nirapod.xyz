import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Logo from "../../../../assets/frontend/logo/sheba.svg";
import Facebook from "../../../../assets/frontend/icon/facebook.png";
import Google from "../../../../assets/frontend/icon/google.png";
import Register from "../register/Register";
import PhoneRegister from "../mobile/PhoneRegister";
const Login = ({ handleCancel }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [ShowMobile, setShowMobile] = useState(false);
  const handleClose = () => {
    handleCancel();
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };
  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleShowMobile = () => {
    setShowMobile(true);
    handleCloseRegister();
  };
  const handleCloseMobile = () => {
    setShowMobile(false);
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/20 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out  opacity-100">
      {showRegister && (
        <Register
          handleCloseRegister={handleCloseRegister}
          handleCancel={handleCancel}
          handleCloseMobile={handleCloseMobile}
        />
      )}
      {ShowMobile && (
        <PhoneRegister
          handleCloseMobile={handleCloseMobile}
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
            <p className="mt-3 text-md text-black/70 font-medium">Login with</p>
          </div>
          <div className="mt-3">
            <button
              onClick={handleShowMobile}
              className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 duration-300 text-white rounded-lg font-semibold"
            >
              Mobile Number
            </button>
          </div>
          <div className="mt-3 flex gap-3">
            <button className="w-full py-2 border rounded-lg text-sm text-black/70 font-semibold">
              <div className="flex justify-center items-center gap-3">
                <img className="w-[20px]" src={Google} alt="" />
                <p>Google</p>
              </div>
            </button>
            <button className="w-full py-2 border rounded-lg text-sm text-black/70 font-semibold">
              <div className="flex justify-center items-center gap-3">
                <img className="w-[20px]" src={Facebook} alt="" />
                <p>Facebook</p>
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

export default Login;
