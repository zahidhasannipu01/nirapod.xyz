import React from "react";
import Credibility from "../../../view/home/components/credibility/Credibility";
import FooterContent from "./components/FooterContent";
import Container from "../../../utils/Container";
import CopyrightText from "./components/CopyrightText";

const Footer = () => {
  return (
    <div className="bg-[#ebecef] py-5">
      <Container>
        <FooterContent />
        <div className="border-b-2 mt-5"></div>
        <Credibility />
      </Container>
      <CopyrightText />
    </div>
  );
};

export default Footer;
