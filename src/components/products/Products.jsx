import { BiHeart } from "react-icons/bi";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { IoEllipseOutline } from "react-icons/io5";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";
import "./Products.scss";
import React, { useRef, useState } from "react";

export const Products = ({ title, Products, Products2, FragRef }) => {
  const scrollProducts1 = useRef(null);
  const [position1, setPosition1] = useState(0);

  const scrollProducts2 = useRef(null);
  const [position2, setPosition2] = useState(0);

  function toLeft1() {
    console.log(scrollProducts1.current.offsetWidth / 3);
    let value = position1 === 0 ? 0 : -1;
    setPosition1(position1 + value);
    scrollProducts1.current.scrollLeft -=
      scrollProducts1.current.offsetWidth / 3;
  }

  function toRigth1() {
    console.log(scrollProducts1.current.offsetWidth / 3);
    let value = position1 === 3 ? 0 : 1;
    setPosition1(position1 + value);
    scrollProducts1.current.scrollLeft +=
      scrollProducts1.current.offsetWidth / 3;
  }

  function toLeft2() {
    console.log(position2);
    let value = position2 === 0 ? 0 : -1;
    setPosition2(position2 + value);
    scrollProducts2.current.scrollLeft -=
      scrollProducts2.current.offsetWidth / 3;
  }

  function toRigth2() {
    console.log(position2);
    let value = position2 === 3 ? 0 : 1;
    setPosition2(position2 + value);
    scrollProducts2.current.scrollLeft +=
      scrollProducts2.current.offsetWidth / 3;
  }

  return (
    <div ref={FragRef} className="container">
      <div className="container-title">
        <h2 className="title">{title}</h2>

        <div className="title-link">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00005 0C11.5947 0 14.5854 2.58667 15.2127 6C14.5861 9.41333 11.5947 12 8.00005 12C4.40538 12 1.41472 9.41333 0.787384 6C1.41405 2.58667 4.40538 0 8.00005 0ZM8.00005 10.6667C9.3597 10.6664 10.679 10.2045 11.742 9.35678C12.8049 8.50901 13.5487 7.32552 13.8514 6C13.5475 4.67554 12.8033 3.49334 11.7405 2.64668C10.6776 1.80003 9.35892 1.33902 8.00005 1.33902C6.64118 1.33902 5.32251 1.80003 4.25963 2.64668C3.19676 3.49334 2.45256 4.67554 2.14872 6C2.45145 7.32552 3.19517 8.50901 4.25815 9.35678C5.32113 10.2045 6.6404 10.6664 8.00005 10.6667ZM8.00005 9C7.2044 9 6.44134 8.68393 5.87873 8.12132C5.31612 7.55871 5.00005 6.79565 5.00005 6C5.00005 5.20435 5.31612 4.44129 5.87873 3.87868C6.44134 3.31607 7.2044 3 8.00005 3C8.7957 3 9.55876 3.31607 10.1214 3.87868C10.684 4.44129 11.0001 5.20435 11.0001 6C11.0001 6.79565 10.684 7.55871 10.1214 8.12132C9.55876 8.68393 8.7957 9 8.00005 9ZM8.00005 7.66667C8.44208 7.66667 8.866 7.49107 9.17856 7.17851C9.49112 6.86595 9.66672 6.44203 9.66672 6C9.66672 5.55797 9.49112 5.13405 9.17856 4.82149C8.866 4.50893 8.44208 4.33333 8.00005 4.33333C7.55802 4.33333 7.1341 4.50893 6.82154 4.82149C6.50898 5.13405 6.33338 5.55797 6.33338 6C6.33338 6.44203 6.50898 6.86595 6.82154 7.17851C7.1341 7.49107 7.55802 7.66667 8.00005 7.66667Z"
              fill="#333333"
            />
          </svg>
          <a href="">Ver todos</a>
        </div>
      </div>

      <ul className="container-products" ref={scrollProducts1}>
        {Products.map((product, index) => {
          return (
            <>
              <li key={index}>
                <div className="imageContainer-products">
                  <img src={product.img} alt="" />
                  <BiHeart className="heart-product" />
                </div>
                <p className="product-title">{product.title}</p>
                <div className="starContainer-product">
                  <BsFillStarFill className="star-product" />
                  <BsFillStarFill className="star-product" />
                  <BsFillStarFill className="star-product" />
                  <BsFillStarFill className="star-product" />
                  <BsStar className="star-product" />
                </div>
                {product.promotion.status && (
                  <p className="promotion-price">R$ {product.price}</p>
                )}
                <p className="product-price">
                  R${" "}
                  {product.promotion.status
                    ? product.promotion.price
                    : product.price}
                </p>
                <ButtonBuy id={"2"} />
              </li>
            </>
          );
        })}
      </ul>
      <div className="positions-products">
        {position1 === 0 && (
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
        )}
        <IoEllipseOutline className="positions-products" />
        {position1 === 1 && (
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
        )}
        <IoEllipseOutline className="positions-products" />
        {position1 === 2 && (
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
        )}
        <IoEllipseOutline className="positions-products" />
        {position1 === 3 && (
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
        )}
      </div>
      <div className="arrowIcon-Container-products">
        <MdOutlineArrowBackIosNew
          onClick={toLeft1}
          className="arrowIcon-products"
        />
        <MdOutlineArrowForwardIos
          onClick={toRigth1}
          className="arrowIcon-products"
        />
      </div>

      {Products2.length > 0 && (
        <>
          <ul className="container-products" ref={scrollProducts2}>
            {Products2.map((product, index) => {
              return (
                <>
                  <li key={index + 10}>
                    <div className="imageContainer-products">
                      <img src={product.img} alt="" />
                      <BiHeart className="heart-product" />
                    </div>

                    <p className="product-title">{product.title}</p>
                    <div className="starContainer-product">
                      <BsFillStarFill className="star-product" />
                      <BsFillStarFill className="star-product" />
                      <BsFillStarFill className="star-product" />
                      <BsFillStarFill className="star-product" />
                      <BsStar className="star-product" />
                    </div>
                    {product.promotion.status && (
                      <p className="promotion-price">R$ {product.price}</p>
                    )}
                    <p className="product-price">
                      R${" "}
                      {product.promotion.status
                        ? product.promotion.price
                        : product.price}
                    </p>
                    <ButtonBuy id={"Products1"} />
                  </li>
                </>
              );
            })}
          </ul>

          <div className="positions-products">
            {position2 === 0 && (
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
            )}
            <IoEllipseOutline className="positions-products" />
            {position2 === 1 && (
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
            )}
            <IoEllipseOutline className="positions-products" />
            {position2 === 2 && (
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
            )}
            <IoEllipseOutline className="positions-products" />
            {position2 === 3 && (
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
            )}
          </div>
          <div className="arrowIcon-Container-products2">
            <MdOutlineArrowBackIosNew
              onClick={toLeft2}
              className="arrowIcon-products"
            />
            <MdOutlineArrowForwardIos
              onClick={toRigth2}
              className="arrowIcon-products"
            />
          </div>
        </>
      )}
    </div>
  );
};
