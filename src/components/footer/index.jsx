import React from "react";
import { ContainerFooter } from "./styled";
import company from "../../assets/wppcompany.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <img src={company} />
      </div>
      <div>
        <img src={facebook} alt="icon facebook" />
        <img src={instagram} alt="icon instagram" />
        <img src={linkedin} alt="icon linkedin" />
      </div>
    </ContainerFooter>
  );
};

export default Footer;
