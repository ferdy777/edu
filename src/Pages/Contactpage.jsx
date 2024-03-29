import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

const Contactpage = () => {
  return (
    <>
      <Hero
        heading="CONTACT US"
        text="Feel free to contact us by filling your deatils in the form below"
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Contactpage;
