import "./interest.scss";
import React from "react";

export const Interest = () => {
  return (
    <section className="interest-container">
      <h2 className="interest-title">isso pode ser do seu interesse</h2>
      <div className="interest-container-img">
        <div className="interest-firstElement">
          <p className="interest-firstElement-text">maquiagens</p>
          <a className="interest-firstElement-link" href="">
            VER MAIS
          </a>
        </div>

        <div className="interest-secondElement">
          <p className="interest-secondElement-text">fragrâncias</p>
          <a className="interest-secondElement-link" href="">
            VER MAIS
          </a>
        </div>

        <div className="interest-thirdElement">
          <p className="interest-thirdElement-text">
            {"energia & performance"}
          </p>
          <a className="interest-thirdElement-link" href="">
            VER MAIS
          </a>
        </div>

        <div className="interest-fourthElement">
          <p className="interest-fourthElement-text">{"corpo & banho"}</p>
          <a className="interest-fourthElement-link" href="">
            VER MAIS
          </a>
        </div>
      </div>
    </section>
  );
};
