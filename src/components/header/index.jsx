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

  useEffect(() => {
    const name = dataValue.map((name) => name.title.toLowerCase());
    const result = name.filter((item) => item.includes(valueInput));
    setSearchResult(result);
  }, [valueInput]);

  console.log(searchResult);

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
          ({searchResult.length + 1}) <span>ver resultado de busca</span>
        </button>
        <input
          onChange={({ target }) => setValueInput(target.value)}
          value={valueInput}
          type="text"
          placeholder="buscar"
        />
        {isOpenModal && (
          <div className="modal">
            <button onClick={closeModal}>X</button>

            <div>
              {searchResult.map((data, i) => {
                <ul key={i}>
                  <li>{data.name}</li>
                </ul>;
              })}
            </div>
          </div>
        )}

        <button onClick={closeModal}>Login</button>
        <img src={shopMiniCart} alt="ico minicart" />
      </div>
    </ContainerHeader>
  );
};

export default Header;
