import React, { useEffect, useState } from "react";
import LogoIcon from "./components/LogoIcon";
import SideMenu from "./components/SideMenu";

const Sidebar = () => {
  const [IsCollapsed, setIsCollapsed] = useState(false);
  const handleToggle = () => {
    setIsCollapsed(!IsCollapsed);
    sessionStorage.setItem("IsCollapsed", JSON.stringify(!IsCollapsed));
  };
  useEffect(() => {
    if (sessionStorage.getItem("IsCollapsed")) {
      setIsCollapsed(JSON.parse(sessionStorage.getItem("IsCollapsed")));
    }
  }, []);
  return (
    <div
      className={`relative px-4 py-2 ${
        IsCollapsed ? "w-16" : "w-64"
      } h-screen border bg-gradient-to-b duration-300 from-[#c0d8ff]/20 to-[#06b6d46e]/20 shadow-[2px_0px_10px_0px_rgba(0,0,0,0.1)] `}
    >
      <LogoIcon IsCollapsed={IsCollapsed} handleToggle={handleToggle} />
      <div>
        <div className="mt-3 mb-3 border-b-2"></div>
      </div>
      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default Sidebar;
