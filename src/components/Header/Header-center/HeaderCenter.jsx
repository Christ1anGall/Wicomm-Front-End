import "./HeaderCenter.scss";
import { BiSearch, BiHeart } from "react-icons/bi";
import { RiUserLine, RiShoppingBagLine } from "react-icons/ri";
import LogoSvgComponent from "./Logo/Logo";
import React from "react";
export const HeaderCenter = () => {
  return (
    <section className="container-HeaderCenter">
      <LogoSvgComponent className="Logo-HeaderCenter" />
      <div className="search-container-HeaderCenter">
        <input
          type="text"
          className="searchInput-HeaderCenter"
          placeholder="Busque aqui o produto de seu interesse"
        />
        <BiSearch className="searchIcon-HeaderCenter" />
      </div>

      <div className="LoginContainer-HeaderCenter">
        <RiUserLine className="IconLogin-HeaderCenter" />
        <div className="LoginTextContainer-HeaderCenter">
          <p className="LoginText-HeaderCenter">Olá Visitante,</p>
          <a href="" className="LoginLink-HeaderCenter">
            ENTRE OU CADASTRE-SE
          </a>
        </div>
      </div>

      <div className="favContainer-HeaderCenter">
        <BiHeart className="iconFav-HeaderCenter" />
        <p className="textFav-HeaderCenter">FAVORITOS</p>
      </div>

      <div className="shopContainer-HeaderCenter">
        <div>
          <span className="IconNumberShop-HeaderCenter">0</span>
          <RiShoppingBagLine className="IconShop-HeaderCenter" />
        </div>
        <p className="textShop-HeaderCenter">SACOLA</p>
      </div>
    </section>
  );
};
