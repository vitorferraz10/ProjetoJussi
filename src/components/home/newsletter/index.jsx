import React, { useState } from "react";

import { ContainerNewsletter } from "./styled";

const Newsletter = () => {
  const [valueInput, setValueInput] = useState(null);

  const handleForm = (ev) => ev.preventDefault();

  return (
    <ContainerNewsletter>
      <h1>Receba novidades da nossa área de produtos digitais</h1>
      <div>
        <form onSubmit={handleForm}>
          <input
            value={valueInput}
            type="text"
            onChange={({ target }) => setValueInput(target.value)}
            placeholder="Digite seu e-mail"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </ContainerNewsletter>
  );
};

export default Newsletter;
