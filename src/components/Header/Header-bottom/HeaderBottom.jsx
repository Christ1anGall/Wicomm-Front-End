import "./HeaderBottom.scss";
import { TbMenu2 } from "react-icons/tb";
export const HeaderBottom = () => {
  return (
    <section className="container-HeaderBottom">
      <button className="button-HeaderBottom">
        <TbMenu2 /> Todas as categorias
      </button>
      <button className="button-HeaderBottom">FRAGRÂNCIAS</button>
      <button className="button-HeaderBottom">MAQUIAGEM</button>
      <button className="button-HeaderBottom">{"CORPO & BANHO"}</button>
      <button className="button-HeaderBottom">VIDA SAUDÁVEL</button>
      <button className="button-HeaderBottom">ENERGIA E PERFORMANCE</button>
    </section>
  );
};
