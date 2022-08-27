import "./interest.scss";
import beautifulWoman from "./img/beautifulWoman.png";
import closeUp from "./img/closeUp.png";
import muscularMan from "./img/muscularMan.png";
import womanPreparing from "./img/womanPreparing.png";

export const Interest = () => {
  return (
    <section className="interest-container">
      <h2 className="interest-title">isso pode ser do seu interesse</h2>
      <div className="interest-container-img">
        <div className="interest-firstElement">
          <img
            className="interest-firstElement-img"
            src={beautifulWoman}
            alt=""
          />
          <p className="interest-firstElement-text">maquiagens</p>
        </div>

        <div className="interest-secondElement">
          <img
            className="interest-secondElement-img"
            src={womanPreparing}
            alt=""
          />
          <p className="interest-secondElement-text">fragrâncias</p>
        </div>

        <div className="interest-thirdElement">
          <img className="interest-thirdElement-img" src={muscularMan} alt="" />
          <p className="interest-thirdElement-text">
            {"energia & performance"}
          </p>
        </div>

        <div className="interest-fourthElement">
          <img className="interest-fourthElement-img" src={closeUp} alt="" />
          <p className="interest-fourthElement-text">{"corpo & banho"}</p>
        </div>
      </div>
    </section>
  );
};
