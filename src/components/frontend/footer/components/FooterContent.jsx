import React from "react";
import Container from "../../../../utils/Container";
import SocialMedia from "./SocialMedia";
import { useSelector } from "react-redux";

const FooterContent = () => {
  const { phone_number, alternative_phone_number, email, address } =
    useSelector((state) => state.website);
  return (
    <Container>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-10 gap-x-20 md:gap-x-5 ">
        <div>
          <p className="font-bold">Contact</p>
          <p className="mt-3">
            {phone_number}, {alternative_phone_number}
          </p>
          <div className="mt-3">
            <p className="font-medium">Corporate Address</p>
            <p>{address}</p>
          </div>
          <div className="mt-5">
            <p className="font-semibold">Trade License No</p>
            <p>TRAD/DNCC/145647/2022</p>
          </div>
        </div>
        <div>
          <p className="font-bold">Quick Links</p>
          <p className="mt-3">Blog</p>
          <p className="mt-3">Terms and Conditions</p>
          <p className="mt-3">Privacy Policy</p>
          <p className="mt-3">Refund and Return Policy</p>
          <p className="mt-3">Complain</p>
        </div>
        <div>
          <p className="font-bold">About Nirapod</p>
          <p className="mt-3">Company Profile</p>

          <p className="mt-3">Complain</p>
        </div>
        <div>
          <p className="font-bold">Connect With Us</p>
          <SocialMedia />
        </div>
      </div>
    </Container>
  );
};

export default FooterContent;
