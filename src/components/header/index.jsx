import React, { useEffect, useState } from "react";

import { ContainerHeader } from "./styled";
import logoJussi from "../../assets/logoJussi.svg";
import shopMiniCart from "../../assets/shopping-cart.svg";
import { useFetch } from "../context/useFetch";

const Header = () => {
  const { dataValue } = useFetch(),
    [valueInput, setValueInput] = useState(null),
    [searchResult, setSearchResult] = useState([]),
    [isOpenModal, setIsOpenModal] = useState(false),
    [isCloseModal, setIsCloseModal] = useState(false);

  console.log(dataValue);

  useEffect(() => {
    const name = dataValue.map((name) => name.title.toLowerCase());
    const result = name.filter((item) => item.includes(valueInput));
    setSearchResult(result);
  }, [valueInput]);

  function closeModal() {
    setIsOpenModal(false);
    setIsCloseModal(true);
  }
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
        <button className="btnOpenModal" onClick={() => setIsOpenModal(true)}>
          ({searchResult.length}) <span>ver resultado de busca</span>
        </button>
        <input
          onChange={({ target }) => setValueInput(target.value)}
          value={valueInput}
          type="text"
          placeholder="buscar"
        />
        {isOpenModal && (
          <div className="modal">
            <section>
              <p> Lista de produtos pesquisados: </p>
              <button onClick={closeModal}>X</button>
            </section>

            {searchResult.map((result, i) => (
              <div>
                <ul>
                  <li key={i}>{result}</li>
                </ul>
              </div>
            ))}
          </div>
        )}

        <button onClick={closeModal}>Login</button>
        <img src={shopMiniCart} alt="ico minicart" />
      </div>
    </ContainerHeader>
  );
};

export default Header;
