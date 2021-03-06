import React from "react";
import LandingPicture from "./LandingPicture";
import AboutUs from "./AboutUs";
import Slider from "./SliderComponent";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <React.Fragment>
      <LandingPicture />
      <AboutUs />
      <Slider />
    </React.Fragment>
  );
};

export default LandingPage;
