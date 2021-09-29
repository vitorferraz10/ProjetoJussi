import React from "react";
import { Banner } from "./styled";
import mixer from "../../../assets/images/mixer.svg";
import refrigerator from "../../../assets/images/refrigerator.svg";
import drink from "../../../assets/images/drink.svg";

const index = () => {
  return (
    <Banner>
      <section>
        <div>
          <h1>Criamos lojas que vendem mais.</h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <button>Veja nossas soluções</button>
        </div>
      </section>
      <main>
        <div className="left">
          <img src={refrigerator} alt="mixer" />
          <button>Mais detalhes</button>
        </div>
        <div className="zindex">
          <img src={mixer} alt="refrigerator" />
          <button>Comprar em 12x</button>
        </div>
        <div className="right">
          <img src={drink} alt="drink" />
          <button>Adicionar à sacola</button>
        </div>
      </main>
    </Banner>
  );
};

export default index;
