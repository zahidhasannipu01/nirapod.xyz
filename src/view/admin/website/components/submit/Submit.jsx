import React from "react";
import { useSelector } from "react-redux";
import AxiosInstance from "../../../../../axiosInstance";
import { Bounce, toast } from "react-toastify";

const Submit = ({ handleViewData }) => {
  // Extract data from Redux store
  const {
    site_title,
    site_tagline,
    logo,
    address,
    phone_number,
    alternative_phone_number,
    email,
    meta_title,
    meta_description,
    meta_keywords,
    copyright_text,
    facebook,
    instagram,
    linkedin,
    youtube,
  } = useSelector((state) => state.website);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("site_title", site_title);
    formData.append("site_tagline", site_tagline);
    formData.append("address", address);
    formData.append("phone_number", phone_number);
    formData.append("alternative_phone_number", alternative_phone_number);
    formData.append("email", email);
    formData.append("meta_title", meta_title);
    formData.append("meta_description", meta_description);
    formData.append("meta_keywords", meta_keywords);
    formData.append("copyright_text", copyright_text);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    formData.append("youtube", youtube);

    // Handle logo file separately if needed
    if (logo) {
      formData.append("logo", logo); // Ensure `logo` is a `File` object if it is an image upload
    }

    if (site_title !== "") {
      try {
        await AxiosInstance.put("/web/web-info-update/1", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Website Information has been updated.", {
          position: "bottom-center",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        handleViewData();
      } catch (error) {
        console.error("Error updating settings:", error);
      }
    } else {
      try {
        await AxiosInstance.post("/web/add-web-info", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Website Information has been added.", {
          position: "bottom-center",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        handleViewData();
      } catch (error) {
        console.error("Error updating settings:", error);
      }
    }
  };

  return (
    <div className="flex justify-end items-center gap-3 mt-[2.3rem]">
      <button
        onClick={handleSubmit}
        className="text-white text-xs bg-gradient-to-r from-[#ffbc3d] to-[#ff7c00] bg-[#06b6d4] px-4 py-2 rounded-2xl"
      >
        {site_title !== "" ? "Update" : "Add Information"}
      </button>
    </div>
  );
};

export default Submit;
