import React from "react";
import Container from "../../../../utils/Container";
import serviceData from "./servicedata";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Services = () => {
  return (
    <div className="mb-5">
      <Container>
        {serviceData.map((items, index) => {
          return (
            <div
              key={index.id}
              className="mt-5 md:mt-10 lg:mt-32 xl:mt-32 2xl:mt-32 mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20"
            >
              <h1 className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl  font-semibold text-black/80  mb-5">
                {items.title}
              </h1>
              <div className="flex justify-between items-center gap-5">
                <Swiper
                  slidesPerView={2} // Default for desktop
                  spaceBetween={1} // Default space between slides
                  navigation={true}
                  pagination={{
                    type: "fraction",
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    // Tablets and smaller desktops
                    768: {
                      slidesPerView: 3, // Show 4 slides on tablets
                      spaceBetween: 2, // Maintain default space on larger screens
                    },
                    // Larger desktops
                    1024: {
                      slidesPerView: 4, // Ensure 4 slides on larger screens
                      spaceBetween: 2, // Same gap on desktop
                    },
                  }}
                >
                  {items.services.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="flex justify-center items-center flex-col">
                          <div className="w-[170px] h-[120px] md:w-[210px] lg:w-[265px] xl:w-[265px] 2xl:w-[265px]  md:h-[160px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px] overflow-hidden rounded-lg shadow-md">
                            <img
                              className="w-full h-full object-cover"
                              src={item.image}
                              alt={item.sub_category_name}
                            />
                          </div>
                          <h1 className="text-md font-semibold mt-3 text-center">
                            {item.sub_category_name}
                          </h1>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Services;
