import React from "react";

import AboutJussi from "./about";
import AboutVtex from "./AboutVtex";
import Banner from "./banner/index";
import Newsletter from "./newsletter";
import RowUnderBanner from "./rowUnderBanner";
import SliderProduct from "./sliderProduct";
const Home = () => {
  return (
    <>
      <Banner />
      <RowUnderBanner />
      <SliderProduct />
      <AboutJussi />
      <AboutVtex />
      <Newsletter />
    </>
  );
};

export default Home;
