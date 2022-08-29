import "./ButtonBuy.scss";
import React from "react";
export const ButtonBuy = ({ id }) => {
  function onClick(data) {
    //requisição passando o ID do elemento clicado
    console.log(data);
  }

  return (
    <button onClick={onClick(id)} className="ButtonBuy">
      COMPRAR
    </button>
  );
};
