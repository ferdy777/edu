import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Videolayer from "../components/Videoplayer/Videolayer";
import { useState } from "react";

const Aboutpage = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Hero
        heading="ABOUT OUR UNIVERSITY"
        text="We are delighted to welcome you on board to our prestigious university"
      />
      {/* <About /> */}
      <About setPlayState={setPlayState} />
      <Footer />
      <Videolayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default Aboutpage;
