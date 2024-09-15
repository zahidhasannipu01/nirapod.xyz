import React, { useEffect, useState } from "react";
import Container from "../../../utils/Container";
import Searchbar from "./components/Searchbar";
import Login from "../auth/login/Login";
import MobileMenu from "./components/mobile/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import AxiosInstance from "../../../axiosInstance";
import { setWebsite } from "../../../context/admin/websiteSlice/websiteSlice";
const Header = () => {
  const { logoUrl } = useSelector((state) => state.website);
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
  const dispatch = useDispatch();
  const handleViewData = () => {
    AxiosInstance.get("/web/get-web-info")
      .then((res) => {
        const data = res.data;
        dispatch(
          setWebsite({
            ...setWebsite,
            site_title: data.site_title,
            site_tagline: data.site_tagline,
            logo: data.logo,
            address: data.address,
            phone_number: data.phone_number,
            alternative_phone_number: data.alternative_phone_number,
            email: data.email,
            meta_title: data.meta_title,
            meta_description: data.meta_description,
            meta_keywords: data.meta_keywords,
            copyright_text: data.copyright_text,
            facebook: data.facebook,
            instagram: data.instagram,
            linkedin: data.linkedin,
            youtube: data.youtube,
            logoUrl: data.logoUrl,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleViewData();
  }, []);
  return (
    <div className="w-full h-auto py-2 bg-white drop-shadow-md">
      {showLogin && <Login handleCancel={handleCancel} />}
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div>
            <img
              className="w-[120px] md:w-[150px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] "
              src={logoUrl}
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
