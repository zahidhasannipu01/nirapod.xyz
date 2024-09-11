import React from "react";
import Facebook from "../../../../assets/frontend/icon/facebook.png";
import instagram from "../../../../assets/frontend/icon/instagram.png";
import LinkedIn from "../../../../assets/frontend/icon/linkedin.png";
import Youtube from "../../../../assets/frontend/icon/youtube.png";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialMediaData = [
    {
      id: 1,
      image: Facebook,
      url: "https://www.facebook.com/",
    },
    {
      id: 2,
      image: instagram,
      url: "https://www.facebook.com/",
    },
    {
      id: 3,
      image: LinkedIn,
      url: "https://www.facebook.com/",
    },
    {
      id: 4,
      image: Youtube,
      url: "https://www.facebook.com/",
    },
  ];
  return (
    <div className="mt-5 flex justify-start items-center gap-5">
      {socialMediaData.map((items) => (
        <Link target="_blank" to={items.url} key={items.id}>
          <img className="w-[35px]" src={items.image} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
