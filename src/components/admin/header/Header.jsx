import React from "react";
import ProfileIcon from "./components/ProfileIcon";
import RedirectButton from "./components/RedirectButton";

const AdminHeader = () => {
  return (
    <div className="h-[50px] flex justify-between items-center px-8 w-full bg-gradient-to-r  from-[#c0d8ff]/20 to-[#06b6d46e]/20 shadow-[2px_0px_10px_0px_rgba(0,0,0,0.1)] bg-white">
      <div>Quick Action</div>
      <div className="flex gap-3 justify-center items-center">
        <RedirectButton />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default AdminHeader;
