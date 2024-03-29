import React from "react";
import Program from "../components/Programs/Program";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
// import Campus from "../components/Campus/Campus";

const Programpage = () => {
  return (
    <div>
      <Hero
        heading="PROGRAMS WE OFFER"
        text="Feel free to check out our programs"
      />
      <Program />
      <Footer />
    </div>
  );
};

export default Programpage;
