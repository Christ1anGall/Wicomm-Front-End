import "./HeaderBottom.scss";
import React from "react";
import { TbMenu2 } from "react-icons/tb";
export const HeaderBottom = ({ gotoFrag }) => {
  return (
    <section className="container-HeaderBottom">
      <button className="button-HeaderBottom">
        <TbMenu2 /> Todas as categorias
      </button>
      <button className="button-HeaderBottom" onClick={gotoFrag}>
        FRAGRÂNCIAS
      </button>
      <button className="button-HeaderBottom">MAQUIAGEM</button>
      <button className="button-HeaderBottom">{"CORPO & BANHO"}</button>
      <button className="button-HeaderBottom">VIDA SAUDÁVEL</button>
      <button className="button-HeaderBottom">ENERGIA E PERFORMANCE</button>
    </section>
  );
};
