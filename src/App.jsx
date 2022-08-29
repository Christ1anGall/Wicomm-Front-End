import { BeautyPortrait } from "./components/BeautyPortrait/BeautyPortrait";
import esponja from "./components/products/img/image153.png";
import grace from "./components/products/img/image146.png";
import { Products } from "./components/products/Products";
import base from "./components/products/img/image144.png";
import { Interest } from "./components/Interest/interest";
import po from "./components/products/img/image154.png";
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { MultiVit } from "./components/MultiVit/MultiVit";
import React, { useRef } from "react";
import { BodyAndShower } from "./components/BodyAndShower/BodyAndShower";
import { Empire } from "./components/Empire/Empire";

function App() {
  const FragRef = useRef(null);

  const gotoFrag = () => {
    /*    FragRef.current.scrollIntoView(); */
    window.scrollTo({
      top: FragRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header gotoFrag={gotoFrag} />
      <BeautyPortrait />
      <section className="information-shop">
        <div className="card">
          <svg
            width="26"
            height="21"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.24799 0L24.748 0C25.0795 0 25.3974 0.117143 25.6319 0.325658C25.8663 0.534174 25.998 0.816982 25.998 1.11187V18.9018C25.998 19.1966 25.8663 19.4794 25.6319 19.688C25.3974 19.8965 25.0795 20.0136 24.748 20.0136H2.24799C1.91647 20.0136 1.59852 19.8965 1.3641 19.688C1.12968 19.4794 0.997986 19.1966 0.997986 18.9018L0.997986 1.11187C0.997986 0.816982 1.12968 0.534174 1.3641 0.325658C1.59852 0.117143 1.91647 0 2.24799 0ZM23.498 10.0068H3.49799V17.7899H23.498V10.0068ZM23.498 5.55934V2.22374L3.49799 2.22374V5.55934L23.498 5.55934Z"
              fill="#333333"
            />
          </svg>
          <p>Tudo em até 6x sem juros</p>
        </div>

        <div className="truck">
          <svg
            width="29"
            height="20"
            viewBox="0 0 29 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5798 15.6807C10.4262 16.6393 9.88899 17.5163 9.06679 18.1509C8.2446 18.7854 7.19264 19.1347 6.10413 19.1347C5.01561 19.1347 3.96365 18.7854 3.14146 18.1509C2.31926 17.5163 1.78205 16.6393 1.6285 15.6807H0.291626V1.89356C0.291626 1.58884 0.427712 1.29661 0.669946 1.08114C0.912181 0.865677 1.24072 0.744629 1.58329 0.744629H19.6666C20.0092 0.744629 20.3377 0.865677 20.58 1.08114C20.8222 1.29661 20.9583 1.58884 20.9583 1.89356V4.19142H24.8333L28.7083 8.85148V15.6807H26.0798C25.9262 16.6393 25.389 17.5163 24.5668 18.1509C23.7446 18.7854 22.6926 19.1347 21.6041 19.1347C20.5156 19.1347 19.4636 18.7854 18.6415 18.1509C17.8193 17.5163 17.2821 16.6393 17.1285 15.6807H10.5798ZM18.375 3.04249H2.87496V12.2914C3.3846 11.8286 4.0124 11.4822 4.70493 11.2816C5.39746 11.081 6.13421 11.0323 6.85249 11.1394C7.57076 11.2466 8.24929 11.5066 8.83033 11.8972C9.41137 12.2878 9.87771 12.7975 10.1897 13.3829H17.5186C17.7356 12.9773 18.0262 12.6085 18.375 12.2914V3.04249ZM20.9583 9.93607H26.125V9.60862L23.5313 6.48928H20.9583V9.93607ZM21.6041 16.8296C22.1182 16.8296 22.6111 16.648 22.9746 16.3247C23.3381 16.0014 23.5423 15.5629 23.5423 15.1057C23.5423 14.6485 23.3381 14.21 22.9746 13.8866C22.6111 13.5633 22.1182 13.3817 21.6041 13.3817C21.0901 13.3817 20.5971 13.5633 20.2336 13.8866C19.8702 14.21 19.666 14.6485 19.666 15.1057C19.666 15.5629 19.8702 16.0014 20.2336 16.3247C20.5971 16.648 21.0901 16.8296 21.6041 16.8296ZM8.04163 15.1063C8.04163 14.8799 7.99151 14.6558 7.89414 14.4467C7.79677 14.2376 7.65406 14.0477 7.47415 13.8876C7.29423 13.7276 7.08064 13.6007 6.84557 13.514C6.61051 13.4274 6.35856 13.3829 6.10413 13.3829C5.84969 13.3829 5.59774 13.4274 5.36268 13.514C5.12761 13.6007 4.91402 13.7276 4.73411 13.8876C4.55419 14.0477 4.41148 14.2376 4.31411 14.4467C4.21674 14.6558 4.16663 14.8799 4.16663 15.1063C4.16663 15.5633 4.37075 16.0017 4.73411 16.3249C5.09746 16.6481 5.59027 16.8296 6.10413 16.8296C6.61798 16.8296 7.11079 16.6481 7.47415 16.3249C7.8375 16.0017 8.04163 15.5633 8.04163 15.1063Z"
              fill="#333333"
            />
          </svg>

          <p>FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil</p>
        </div>

        <div className="hinode">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C20 15.523 15.523 20 10 20C4.477 20 -1.95696e-07 15.523 -4.37114e-07 10C-6.78532e-07 4.477 4.477 -1.95696e-07 10 -4.37114e-07C15.523 -6.78532e-07 20 4.477 20 10ZM18 10C18 7.87827 17.1571 5.84344 15.6569 4.34314C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10ZM7 15L3.5 12L7 9L7 11L11 11L11 13L7 13L7 15ZM13 5L16.5 8L13 11L13 9L9 9L9 7L13 7L13 5Z"
              fill="#333333"
            />
          </svg>

          <p>Hinode Prime: Receba em casa todo mês com 20% OFF</p>
        </div>

        <div className="box">
          <svg
            width="25"
            height="21"
            viewBox="0 0 25 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4456 8.0015L24.3125 11.7399L18.404 15.5041L12.5 11.7421L6.596 15.5041L0.6875 11.7387L6.55438 8.00037L0.6875 4.26425L6.596 0.5L12.5 4.26087L18.404 0.5L24.3125 4.26425L18.4456 8.0015ZM18.3624 8.0015L12.5 4.2665L6.63763 8.0015L12.5 11.7365L18.3624 8.0015ZM6.63425 16.7517L12.5428 12.9875L18.4513 16.7517L12.5428 20.516L6.63425 16.7517Z"
              fill="#333333"
            />
          </svg>

          <p>Garanta mais economia com frete inteligente</p>
        </div>
      </section>
      <Products
        title={"MAIS VENDIDOS"}
        Products={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
        Products2={[]}
      />
      <Interest />
      <MultiVit />
      <Products
        title={"os mais desejados"}
        Products={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
        Products2={[]}
      />
      <Products
        title={"vida saudável"}
        Products={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
        Products2={[]}
      />
      <BodyAndShower />
      <Products
        title={"corpo e banho"}
        Products={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
        Products2={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
      />
      <Empire />
      {localStorage.setItem(
        "MADE BY CHRISTIAN GALL",
        "    MADE BY CHRISTIAN GALL"
      )}
      <Products
        FragRef={FragRef}
        title={"fragrâncias"}
        Products={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
        Products2={[
          {
            title: "Esponja 3D Dazzle",
            img: esponja,
            promotion: {
              status: true,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
            img: base,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
            img: grace,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
          {
            title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
            img: po,
            promotion: {
              status: false,
              price: 29.9,
            },
            price: 89.9,
          },
        ]}
      />
      <div className="newsProducts-main">
        <Products
          title={"acabaram de chegar"}
          Products={[
            {
              title: "Esponja 3D Dazzle",
              img: esponja,
              promotion: {
                status: true,
                price: 29.9,
              },
              price: 89.9,
            },
            {
              title: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
              img: base,
              promotion: {
                status: false,
                price: 29.9,
              },
              price: 89.9,
            },
            {
              title: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
              img: grace,
              promotion: {
                status: false,
                price: 29.9,
              },
              price: 89.9,
            },
            {
              title: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
              img: po,
              promotion: {
                status: false,
                price: 29.9,
              },
              price: 89.9,
            },
          ]}
          Products2={[]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
