import React from "react";
import Container from "../../../../utils/Container";

const Contact = () => {
  return (
    <div className="bg-[#dfe0e3] py-5 mt-10">
      <Container>
        <p className="text-center md:text-start text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-black/80 font-bold">
          Can’t find your desired service? Let us know 24/7 in 01711162281,
          01611162281.
        </p>
        <div className="mt-5 flex justify-center items-center md:justify-start gap-5">
          <button className="px-6 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-400 duration-300">
            Request a service
          </button>
          <button
            onClick={() => window.open("tel:01711162281")}
            className="px-6 py-2 rounded-lg border border-yellow-600 text-yellow-700   duration-300"
          >
            Call Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
