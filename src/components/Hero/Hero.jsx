import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = ({ heading, text }) => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>{heading} </h1>
        <p>{text}</p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
