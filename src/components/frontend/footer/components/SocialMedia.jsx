import React from "react";
import Facebook from "../../../../assets/frontend/icon/facebook.png";
import Instagram from "../../../../assets/frontend/icon/instagram.png";
import LinkedIn from "../../../../assets/frontend/icon/linkedin.png";
import Youtube from "../../../../assets/frontend/icon/youtube.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SocialMedia = () => {
  const { facebook, instagram, linkedin, youtube } = useSelector(
    (state) => state.website
  );

  const socialMediaData = [
    {
      id: 1,
      image: Facebook,
      url: facebook,
    },
    {
      id: 2,
      image: Instagram,
      url: instagram,
    },
    {
      id: 3,
      image: LinkedIn,
      url: linkedin,
    },
    {
      id: 4,
      image: Youtube,
      url: youtube,
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
