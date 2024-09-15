import React, { useEffect } from "react";
import SiteSettings from "./components/site/SiteSettings";
import SEO from "./components/seo/SEO";
import SocialMedia from "./components/socialmedia/SocialMedia";
import { useDispatch } from "react-redux";
import AxiosInstance from "../../../axiosInstance";
import { setWebsite } from "../../../context/admin/websiteSlice/websiteSlice";

const Website = () => {
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
    <div className="grid grid-cols-2 gap-4">
      <div>
        <SiteSettings />
      </div>
      <div>
        <SEO />
        <SocialMedia handleViewData={handleViewData} />
      </div>
    </div>
  );
};

export default Website;
