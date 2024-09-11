import React from "react";
import Header from "../../components/frontend/header/Index";
import { Outlet } from "react-router";
import Footer from "../../components/frontend/footer/Index";

const FrontendLayout = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden">
      <div className="fixed top-0 w-full z-20">
        <Header />
      </div>

      <div className="flex-1 pt-[4.2rem] md:pt-[4.7rem] lg:pt-[4.7rem] xl:pt-[4.7rem] 2xl:pt-[4.7rem]">
        <Outlet />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default FrontendLayout;
