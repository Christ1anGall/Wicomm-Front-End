import React from "react";
import "./Empire.scss";
import image149 from "./img/image149.png";
import image150 from "./img/image150.png";

export const Empire = () => {
  return (
    <section className="Empire-container">
      <div className="Empire-container-Empire">
        <img
          className="Empire-container-Empire-img-left"
          src={image149}
          alt=""
        />
        <img
          className="Empire-container-Empire-img-right"
          src={image150}
          alt=""
        />
      </div>
      <div className="Empire-container-Line">
        <h2 className="Empire-container-Line-title">Linha EMPIRE</h2>
        <p className="Empire-container-Line-text">
          Escolha a sua fragrância masculina favorita e desperte as melhores
          sensações.
        </p>
        <button className="Empire-container-Line-button">
          conheça nossos produtos
        </button>
      </div>
    </section>
  );
};
