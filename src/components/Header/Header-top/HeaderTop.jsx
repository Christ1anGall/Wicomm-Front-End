import "./HeaderTop.scss";
import { RiUserHeartLine } from "react-icons/ri";
export const HeaderTop = () => {
  return (
    <section className="container-HeaderTop">
      <p>A Empresa</p>

      <div className="aside-HeaderTop">
        <a href="">
          <RiUserHeartLine className="heart-person-HeaderTop" /> SEJA UM
          CONSULTOR
        </a>

        <a href="" className="talkUS-HeaderTop">
          Fale Conosco
        </a>
      </div>
    </section>
  );
};
