import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const Aboutpage = () => {
  return (
    <>
      <Hero
        heading="ABOUT OUR UNIVERSITY"
        text="We are delighted to welcome you on board to our prestigious university"
      />
      <About />
      <Footer />
    </>
  );
};

export default Aboutpage;
