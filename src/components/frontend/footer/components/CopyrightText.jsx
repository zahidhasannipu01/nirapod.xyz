import React from "react";
import Container from "../../../../utils/Container";
import { useSelector } from "react-redux";

const CopyrightText = () => {
  const { copyright_text } = useSelector((state) => state.website);
  return (
    <Container>
      <div className="text-center py-5">
        <div className="flex justify-between items-center gap-10">
          <p className="text-xs">{copyright_text} Reserved</p>
          <p className="text-xs">Developed by Apogee Digital Ltd</p>
        </div>
      </div>
    </Container>
  );
};

export default CopyrightText;
