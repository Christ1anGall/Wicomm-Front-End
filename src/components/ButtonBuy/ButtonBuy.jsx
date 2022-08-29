import "./ButtonBuy.scss";
import React from "react";
export const ButtonBuy = ({ id }) => {
  function onClick() {
    //requisição passando o ID do elemento clicado
    console.log(id);
  }

  return (
    <button onClick={onClick} className="ButtonBuy">
      COMPRAR
    </button>
  );
};
