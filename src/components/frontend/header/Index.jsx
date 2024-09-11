import React, { useEffect, useState } from "react";
import Container from "../../../utils/Container";
import logo from "../../../assets/frontend/logo/sheba.svg";
import Searchbar from "./components/Searchbar";
import Login from "../auth/login/Login";
import MobileMenu from "./components/mobile/MobileMenu";
const Header = () => {
  const [Ishow, setIshow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const getToken = localStorage.getItem("token");
  const handleShowLogin = () => {
    if (!getToken) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  };
  const handleCancel = () => {
    setShowLogin(false);
  };
  const handleShow = () => {
    if (window.scrollY >= 250) {
      setIshow(true);
    } else {
      setIshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className="w-full h-auto py-2 bg-white drop-shadow-md">
      {showLogin && <Login handleCancel={handleCancel} />}
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div>
            <img
              className="w-[120px] md:w-[150px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] "
              src={logo}
              alt="Nirapod.xyz"
            />
          </div>
          <div className="mx-auto hidden md:block">
            <Searchbar />
          </div>
          <div className=" block md:block xl:hidden">
            <MobileMenu handleShowLogin={handleShowLogin} />
          </div>
          <div className="hidden md:hidden xl:block ">
            <div className="flex items-center justify-center gap-5">
              <button className="font-medium">All Services</button>
              <button onClick={handleShowLogin} className="font-medium">
                Login
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
