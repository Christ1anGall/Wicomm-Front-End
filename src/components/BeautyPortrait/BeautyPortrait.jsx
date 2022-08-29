import brushEye from "./img/brush-eye.png";
import image_152 from "./img/image_152.png";
import "./BeautyPortrait.scss";
import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { IoEllipseOutline } from "react-icons/io5";
export const BeautyPortrait = () => {
  return (
    <div className="img-BeatyPortrait">
      <img src={image_152} alt="" className="product-BeautyPortrait" />
      <img src={brushEye} alt="" className="woman-BeautyPortrait" />
      <h2 className="title-BeautyPortrait">Base Líquida DAZZLE</h2>
      <button className="button-BeautyPortrait">COMPRAR</button>
      <div className="arrowIcon-Container">
        <MdOutlineArrowBackIos className="arrowIcon" />
        <MdOutlineArrowForwardIos className="arrowIcon" />
      </div>

      <div className="positions">
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
        <IoEllipseOutline />
        <IoEllipseOutline />
        <IoEllipseOutline />
      </div>
    </div>
  );
};
