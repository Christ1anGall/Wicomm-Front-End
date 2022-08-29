import { ButtonBuy } from "../ButtonBuy/ButtonBuy";
import React from "react";
import "./MultiVit.scss";
import { BsFillStarFill } from "react-icons/bs";
import MultiVitImg from "./img/MultiVit.png";
import Parfum from "./img/Parfum.png";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { IoEllipseOutline } from "react-icons/io5";

export const MultiVit = () => {
  return (
    <>
      <section className="MultiVit-container">
        <div className="MultiVit-container-left">
          <div className="MultiVit-container-left-details">
            <p className="MultiVit-container-left-details-title">
              {"Venyx L’Or "}
            </p>
            <p className="MultiVit-container-left-details-description">100ml</p>
            <div className="MultiVit-container-left-details-stars">
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
            </div>
            <p className="MultiVit-container-left-details-price">R$150</p>
            <p className="MultiVit-container-left-details-creditDetails">
              em até 2x de R$ 75,00
            </p>
          </div>
          <img className="MultiVit-container-left-img" src={Parfum} alt="" />
          <div className="MultiVit-button">
            <ButtonBuy id={"14"} />
          </div>
        </div>

        <div className="MultiVit-container-right">
          <div className="MultiVit-container-right-details">
            <p className="MultiVit-container-right-details-title">
              {"Multi- Vit Complex A-Z Mulheres"}
            </p>
            <p className="MultiVit-container-right-details-description">
              60 Cápsulas
            </p>
            <div className="MultiVit-container-right-details-stars">
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
              <BsFillStarFill className="star-MultiVit" />
            </div>
            <p className="MultiVit-container-right-details-price">R$85</p>
            <p className="MultiVit-container-right-details-creditDetails">
              em até 2x de R$ 42,50
            </p>
          </div>
          <img
            className="MultiVit-container-right-img"
            src={MultiVitImg}
            alt=""
          />
          <div className="MultiVit-button">
            <ButtonBuy id={"14"} />
          </div>
        </div>

        <div className="arrowIcon-Container-MultiVit">
          <MdOutlineArrowBackIosNew className="arrowIcon-MultiVit" />
          <MdOutlineArrowForwardIos className="arrowIcon-MultiVit" />
        </div>
      </section>

      <div className="positions-products">
        <div className="first-positions-products">
          <svg
            width="23"
            height="12"
            viewBox="0 0 23 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="22.5" height="12" rx="6" fill="#aa8232" />
          </svg>
        </div>
        <IoEllipseOutline className="positions-products" />
        <IoEllipseOutline className="positions-products" />
        <IoEllipseOutline className="positions-products" />
      </div>
    </>
  );
};
