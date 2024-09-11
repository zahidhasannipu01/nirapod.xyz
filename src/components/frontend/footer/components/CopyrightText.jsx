import React from "react";
import Container from "../../../../utils/Container";

const CopyrightText = () => {
  return (
    <Container>
      <div className="text-center py-5">
        <div className="flex justify-between items-center gap-10">
          <p className="text-xs">
            Copyright © 2024 Nirapod.xyz | All Rights Reserved
          </p>
          <p className="text-xs">Developed by Apogee Digital Ltd</p>
        </div>
      </div>
    </Container>
  );
};

export default CopyrightText;
