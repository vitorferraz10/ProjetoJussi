import React from "react";
import { SliderContainer } from "./styled";
import imgGeladeira from "../../../assets/images/Geladeira.jpg";
import { JSON } from "./products";
const index = () => {
  console.log(JSON);
  return (
    <SliderContainer>
      <h1>Nossas soluções</h1>
      <section>
        {JSON.map((data, i) => (
          <div key={i}>
            <img src={imgGeladeira} alt={data.name} />
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <ul>
              <li>{data.featureFirst}</li>
              <li>{data.featureSecond}</li>
              <li>{data.featureThird}</li>
            </ul>
            <button>Ver solução</button>
          </div>
        ))}
      </section>
    </SliderContainer>
  );
};

export default index;
