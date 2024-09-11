import React from "react";
import Container from "../../../../utils/Container";

const Stats = () => {
  return (
    <div className="py-5 bg-[#f4f5f8]">
      <Container>
        <div className="flex justify-center items-center gap-3 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
          <div className="text-center px-3 md:px-5 lg:px-20 xl:px-20 2xl:px-20 py-3 border-r-4 border-white">
            <p className="text-[1.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[3rem] text-gray-600 font-medium">
              15,000+
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
              Sevice Provided
            </p>
          </div>
          <div className="text-center px-3 md:px-5 lg:px-20 xl:px-20 2xl:px-20 py-3 border-r-4 border-white">
            <p className="text-[1.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[3rem] text-gray-600 font-medium">
              15,000+
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
              Sevice Provided
            </p>
          </div>
          <div className="text-center px-3 md:px-5 lg:px-20 xl:px-20 2xl:px-20 py-3 ">
            <p className="text-[1.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[3rem] text-gray-600 font-medium">
              15,000+
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
              Sevice Provided
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
