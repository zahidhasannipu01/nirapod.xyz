import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AxiosInstance from "../../../../axiosInstance";
import { setWebsite } from "../../../../context/admin/websiteSlice/websiteSlice";

const LogoIcon = ({ handleToggle, IsCollapsed }) => {
  const { logoUrl } = useSelector((state) => state.website);
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
    <div className="relative flex justify-center items-center">
      <div className="w-[150px]">
        <img src={logoUrl} alt="nirapod.xyz" />
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
