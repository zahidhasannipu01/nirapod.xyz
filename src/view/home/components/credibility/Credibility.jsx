import React from "react";
import Container from "../../../../utils/Container";
import credibilityData from "./credibilitydata";

const Credibility = () => {
  return (
    <div className="mt-5 mb-5 hidden md:hidden lg:block xl:block 2xl:block">
      <Container>
        <div className="flex justify-center items-center gap-x-10">
          {credibilityData.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center bg-white px-2 py-2 rounded-lg gap-2"
              >
                <img className="w-[20px]" src={items.image} alt="" />
                <p className="text-sm font-medium">{items.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Credibility;
