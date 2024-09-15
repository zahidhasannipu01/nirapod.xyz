import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWebsite } from "../../../../../context/admin/websiteSlice/websiteSlice";

const SEO = () => {
  const website = useSelector((state) => state.website);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(
      setWebsite({
        ...setWebsite,
        [id]: value,
      })
    );
  };
  return (
    <div className="border px-6 py-4 rounded-lg">
      <p className="text-lg font-medium leading-5">SEO Settings</p>
      <small>Configure your SEO settings accordly.</small>
      <div className="flex flex-col mt-5 gap-y-6">
        <div>
          <label htmlFor="meta_title" className="text-sm">
            Meta Title
          </label>
          <input
            onChange={handleChange}
            value={website.meta_title}
            id="meta_title"
            type="text"
            placeholder="Meta Title"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="meta_description" className="text-sm">
            Meta Description
          </label>
          <textarea
            onChange={handleChange}
            value={website.meta_description}
            id="meta_description"
            type="text"
            placeholder="Enter Meta Description"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="meta_keywords" className="text-sm">
            Meta Keywords
          </label>
          <input
            onChange={handleChange}
            value={website.meta_keywords}
            id="meta_keywords"
            type="text"
            placeholder="Enter Meta Keywords"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SEO;
