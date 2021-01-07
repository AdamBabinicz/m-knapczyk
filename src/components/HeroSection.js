import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";
import Typed from "react-typed";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/1.mp4" autoPlay loop /> */}
      <h1>Monika Knapczyk</h1>
      <Typed
        className="typed-text"
        strings={[
          "pisarka",
          "poetka",
          "wydawca",
          "blogerka",
          "rocznik 1977",
          "z wykształcenia: doktor nauk technicznych",
          "prywatnie - mama dwójki dzieci",
          "radomianka",
          "mieszka w Puławach",
        ]}
        typeSpeed={40}
        backSpeed={60}
        loop
      />
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Start
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Zobacz <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
