import React from "react";
import { AboutStyled } from "./styled.jsx";
import imageJussi from "../../../assets/images/image-jussi.svg";
const AboutJussi = () => {
  return (
    <AboutStyled>
      <div>
        <h1>Olá, Somos Jüssi</h1>
        <p>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
        <button>Conheça a Jüssi</button>
      </div>
      <img src={imageJussi} alt="image Jussi" />
    </AboutStyled>
  );
};

export default AboutJussi;
