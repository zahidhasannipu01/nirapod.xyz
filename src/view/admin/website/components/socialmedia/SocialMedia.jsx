import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWebsite } from "../../../../../context/admin/websiteSlice/websiteSlice";
import Submit from "../submit/Submit";

const SocialMedia = ({ handleViewData }) => {
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
    <div className="mt-5 border px-6 py-4 rounded-lg">
      <div className="flex flex-col mt-5 gap-y-7">
        <div>
          <input
            onChange={handleChange}
            value={website.facebook}
            id="facebook"
            type="text"
            placeholder="Facebook URL"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            value={website.instagram}
            id="instagram"
            type="text"
            placeholder="Instagram URL"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            value={website.linkedin}
            id="linkedin"
            type="text"
            placeholder="Linkedin URL"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            value={website.youtube}
            id="youtube"
            type="text"
            placeholder="Youtube URL"
            className="border w-full px-4 py-1 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <Submit handleViewData={handleViewData} />
    </div>
  );
};

export default SocialMedia;
