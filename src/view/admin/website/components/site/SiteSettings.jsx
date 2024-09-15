import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWebsite } from "../../../../../context/admin/websiteSlice/websiteSlice";

const SiteSettings = () => {
  const dispatch = useDispatch();
  const website = useSelector((state) => state.website);

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;

    if (type === "file") {
      // Handle file input separately
      const file = files[0]; // Get the first selected file
      dispatch(setWebsite({ [id]: file }));
    } else {
      dispatch(setWebsite({ [id]: value }));
    }
  };

  return (
    <div className="border px-6 py-4 rounded-lg">
      <p className="text-lg font-medium leading-5">Site Settings</p>
      <small>Configure your site and SEO settings accordingly.</small>
      <div className="flex flex-col mt-5 gap-y-6">
        <div>
          <label htmlFor="site_title" className="text-sm">
            Site Title <span className="text-red-500">*</span>
          </label>
          <input
            id="site_title"
            onChange={handleChange}
            value={website.site_title}
            type="text"
            placeholder="Site Title"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="site_tagline" className="text-sm">
            Tagline <span className="text-red-500">*</span>
          </label>
          <input
            id="site_tagline"
            onChange={handleChange}
            value={website.site_tagline}
            type="text"
            placeholder="Site Tagline"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="logo" className="text-sm">
            Upload Logo <span className="text-red-500">*</span>
          </label>
          <input
            id="logo"
            onChange={handleChange}
            type="file"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone_number" className="text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone_number"
            onChange={handleChange}
            value={website.phone_number}
            type="text"
            placeholder="Enter Phone Number"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="alternative_phone_number" className="text-sm">
            Alternative Phone Number
          </label>
          <input
            id="alternative_phone_number"
            onChange={handleChange}
            value={website.alternative_phone_number}
            type="text"
            placeholder="Enter Alternative Phone Number"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            id="email"
            onChange={handleChange}
            value={website.email}
            type="email"
            placeholder="Enter Email Address"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-sm">
            Address
          </label>
          <input
            id="address"
            onChange={handleChange}
            value={website.address}
            type="text"
            placeholder="Enter Address"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="copyright_text" className="text-sm">
            Copyright Text
          </label>
          <input
            id="copyright_text"
            onChange={handleChange}
            value={website.copyright_text}
            type="text"
            placeholder="Enter Copyright Text"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SiteSettings;
