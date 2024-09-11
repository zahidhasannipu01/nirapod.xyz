import React from "react";
import bannerImage from "../../../../assets/frontend/banner/herobanner.jpg";
import Container from "../../../../utils/Container";
import HeroSearchBar from "../searchbar/SearchBar";
import ServiceCard from "../card/ServiceCard";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-no-repeat bg-center text-white flex justify-center items-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      <Container>
        <div className="relative z-10">
          <p className="text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-semibold capitalize text-center">
            We care about your hygiene and health.
          </p>
          <p className="text-[0.9rem] md:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.5rem] font-medium capitalize text-center">
            One stop solutions for your health. Order Now
          </p>
          {/* <HeroSearchBar /> */}
          <ServiceCard />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
