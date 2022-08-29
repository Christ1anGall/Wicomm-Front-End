import brushEye from "./img/brush-eye.png";
import image_152 from "./img/image_152.png";
import "./BeautyPortrait.scss";
import React, { useRef, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { IoEllipseOutline } from "react-icons/io5";
export const BeautyPortrait = () => {
  const scrollProducts = useRef(null);
  const [position, setPosition] = useState(0);

  function toLeft() {
    let value = position === 0 ? 0 : -1;
    setPosition(position + value);
    scrollProducts.current.scrollLeft -=
      scrollProducts.current.offsetWidth / 2.5;
  }

  function toRigth() {
    let value = position === 3 ? 0 : 1;
    setPosition(position + value);
    scrollProducts.current.scrollLeft +=
      scrollProducts.current.offsetWidth / 2.5;
  }
  return (
    <div className="img-BeatyPortrait">
      <ul className="listPrincipal" ref={scrollProducts}>
        <li className="firstElement">
          <img src={image_152} alt="" className="product-BeautyPortrait" />
          <div className="infoContainer">
            <h2 className="title-BeautyPortrait">Base Líquida DAZZLE</h2>
            <button className="button-BeautyPortrait">COMPRAR</button>
          </div>
        </li>
        <li className="SecondElement">
          <img src={image_152} alt="" className="product-BeautyPortrait" />

          <div className="infoContainer">
            <h2 className="title-BeautyPortrait">Base Líquida DAZZLE</h2>
            <button className="button-BeautyPortrait">COMPRAR</button>
          </div>
        </li>
      </ul>

      <div className="arrowIcon-Container">
        <MdOutlineArrowBackIos className="arrowIcon" onClick={toLeft} />
        <MdOutlineArrowForwardIos className="arrowIcon" onClick={toRigth} />
      </div>

      <div className="positions">
        {position === 0 && (
          <div className="first-positions">
            <svg
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22.5" height="12" rx="6" fill="white" />
            </svg>
          </div>
        )}
        <IoEllipseOutline />
        {position === 1 && (
          <div className="first-positions">
            <svg
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22.5" height="12" rx="6" fill="white" />
            </svg>
          </div>
        )}
        <IoEllipseOutline />
        {position === 2 && (
          <div className="first-positions">
            <svg
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22.5" height="12" rx="6" fill="white" />
            </svg>
          </div>
        )}
        <IoEllipseOutline />
        {position === 3 && (
          <div className="first-positions">
            <svg
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22.5" height="12" rx="6" fill="white" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
