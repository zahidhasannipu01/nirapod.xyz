import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Logo from "../../../../assets/frontend/logo/sheba.svg";
import Facebook from "../../../../assets/frontend/icon/facebook.png";
import Google from "../../../../assets/frontend/icon/google.png";
import Login from "../login/Login";
const Register = ({ handleCloseRegister, handleCancel, handleCloseMobile }) => {
  const [ShowLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    handleCloseRegister();
    handleCloseMobile();
  };
  const handleRegClose = () => {
    handleCancel();
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen  flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out  opacity-100">
      {ShowLogin && (
        <Login handleCloseLogin={handleShowLogin} handleCancel={handleCancel} />
      )}
      <div className="bg-white relative p-6 rounded-md shadow-md w-[550px] h-[450px] flex justify-center items-center transform transition-all duration-300 ease-out scale-95">
        <button
          onClick={handleRegClose}
          className="absolute -top-4 text-3xl -right-3 bg-white rounded-full text-rose-600 cursor-pointer"
        >
          <MdCancel />
        </button>
        <div className="">
          <div className="flex justify-center items-center flex-col">
            <img className="w-[150px]" src={Logo} alt="" />
            <p className="mt-3 text-md text-black/70 font-medium">
              Signup with
            </p>
          </div>
          <div className="mt-3">
            <button className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 duration-300 text-white rounded-lg font-semibold">
              Register
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
              Do have an account in Nirapod.xyz?
            </p>
            <button
              onClick={handleShowLogin}
              className="px-4 border text-sm py-1 rounded-lg text-yellow-600 border-yellow-600"
            >
              Login Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
