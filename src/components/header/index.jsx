import React from "react";
import { ContainerHeader } from "./styled";
import logoJussi from "../../assets/logoJussi.svg";
import shopMiniCart from "../../assets/shopping-cart.svg";

const index = () => {
  return (
    <ContainerHeader>
      <div>
        <img src={logoJussi} alt="logo" />
        <ul>
          <li>Nossas soluções</li>
          <li>Conheça a Jüssi</li>
        </ul>
      </div>
      <div>
        <input type="text" placeholder="buscar"></input>

        <button>Login</button>
        <img src={shopMiniCart} alt="ico minicart" />
      </div>
    </ContainerHeader>
  );
};

export default index;
