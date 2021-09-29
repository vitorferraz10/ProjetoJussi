import React from "react";
import brastemp from "../../../assets/images/logo-brastemp.svg";
import compraCerta from "../../../assets/images/logo-compracerta.svg";
import consul from "../../../assets/images/logo-consul.svg";
import theBar from "../../../assets/images/logo-thebar.svg";
import arrow from "../../../assets/arrow.svg";
import { RowUnderBannerContainer } from "./styled";
const RowUnderBanner = () => {
  return (
    <RowUnderBannerContainer>
      <div>
        <h2>
          Nossas principais lojas VTEX <img src={arrow} />{" "}
        </h2>
        <img src={brastemp} alt="logo brastemp" />
        <img src={compraCerta} alt="logo compra certa" />
        <img src={consul} alt="logo consul" />
        <img src={theBar} alt="logo the bar" />
      </div>
    </RowUnderBannerContainer>
  );
};

export default RowUnderBanner;
