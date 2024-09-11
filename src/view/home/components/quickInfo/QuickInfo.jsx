import React from "react";
import Container from "../../../../utils/Container";
import Covid from "../../../../assets/frontend/icon/shield (1).png";
import Trained from "../../../../assets/frontend/icon/trained.png";
import Expert from "../../../../assets/frontend/icon/maintenance-equipment.png";
import Support from "../../../../assets/frontend/icon/customer-service.png";
import BannerImg from "../../../../assets/frontend/banner/quicinfo.jpg";
const QuickInfo = () => {
  return (
    <div className="mt-5 mb-0 bg-[#fafbfc] py-5">
      <Container>
        <div>
          <p className="text-center md:text-start font-medium">
            Why Nirapod.xyz is best for you
          </p>
        </div>
        <div>
          <p className="text-center md:text-start text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold">
            Because we care about your heath!
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
          <div className="mt-5 grid grid-rows-2 grid-flow-col gap-4">
            <div className="bg-white px-5 py-3 rounded-lg drop-shadow-sm flex justify-center items-center flex-col">
              <div className="">
                <img className="w-[40px] " src={Support} alt="" />
              </div>
              <div>
                <p className="font-medium text-center">24/7 Support</p>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-lg drop-shadow-sm flex justify-center items-center flex-col">
              <div className="">
                <img className="w-[40px]" src={Covid} alt="" />
              </div>
              <div>
                <p className="font-medium text-center">Sanitized and Masked</p>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-lg drop-shadow-sm flex justify-center items-center flex-col">
              <div className="">
                <img className="w-[40px]" src={Trained} alt="" />
              </div>
              <div>
                <p className="font-medium text-center ">Expert Professional</p>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-lg drop-shadow-sm flex justify-center items-center flex-col">
              <div className="">
                <img className="w-[40px]" src={Expert} alt="" />
              </div>
              <div>
                <p className="font-medium text-center ">Well Equiped</p>
              </div>
            </div>
          </div>
          <div className=" w-[390px] md:w-[950px] lg:w-[950px] xl:w-[950px] 2xl:w-[950px] h-[240px] mt-1 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuickInfo;
