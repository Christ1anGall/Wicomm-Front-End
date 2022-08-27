import "./FooterCenter.scss";

export const FooterCenter = () => {
  return (
    <div className="footerCenter">
      <section className="footerCenter-section">
        <h2 className="footerCenter-title">GRUPO HINODE</h2>
        <a href="" className="footerCenter-text">
          A Empresa
        </a>
        <a href="" className="footerCenter-text">
          Catálogo Hinode
        </a>
        <a href="" className="footerCenter-text">
          Seja um Consultor
        </a>
        <a href="" className="footerCenter-text">
          Hinode Prime
        </a>
        <a href="" className="footerCenter-text">
          Frete Inteligente
        </a>
      </section>
      <section className="footerCenter-section">
        <h2 className="footerCenter-title">MAIS VENDIDOS</h2>
        <a href="" className="footerCenter-text">
          Corps Lígnea Body Contour Gel Modelador
        </a>
        <a href="" className="footerCenter-text">
          Shake de Vanilla H+ HND
        </a>
        <a href="" className="footerCenter-text">
          Shake de Morango H+ HND
        </a>
        <a href="" className="footerCenter-text">
          Luva de Silicone Creme para as Mãos Hands
        </a>
        <a href="" className="footerCenter-text">
          Empire Gold
        </a>
        <a href="" className="footerCenter-text">
          Empire VIP
        </a>
      </section>
      <section className="footerCenter-section">
        <h2 className="footerCenter-title">DÚVIDAS FREQUENTES</h2>
        <a href="" className="footerCenter-text">
          Fale Conosco
        </a>
        <a href="" className="footerCenter-text">
          Entrega, Trocas e Devoluções
        </a>
        <a href="" className="footerCenter-text">
          Compra e Venda
        </a>
        <a href="" className="footerCenter-text">
          Hinode Prime
        </a>
        <a href="" className="footerCenter-text">
          Política de Privacidade
        </a>
        <a href="" className="footerCenter-text">
          Remover Consentimento
        </a>
      </section>
      <section className="alignRight footerCenter-section ">
        <button className="footerCenter-button ">CENTRAL DE ATENDIMENTO</button>
        <p className="footerCenter-text info">
          De segunda a sexta das 9h às 21h{" "}
        </p>
        <p className="footerCenter-text info">
          Capitas e regiões metropolitanas 4020-2424
        </p>
        <p className="footerCenter-text info">
          Demais localidades: 0800-144-6633
        </p>
        <div className="footerCenter-social">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5ZM20 4C15.052 4 14.244 4.014 11.942 4.116C10.374 4.19 9.322 4.4 8.346 4.78C7.478 5.116 6.852 5.518 6.186 6.186C5.56001 6.7908 5.07871 7.52917 4.778 8.346C4.398 9.326 4.188 10.376 4.116 11.942C4.012 14.15 4 14.922 4 20C4 24.948 4.014 25.756 4.116 28.058C4.19 29.624 4.4 30.678 4.778 31.652C5.118 32.522 5.518 33.148 6.182 33.812C6.856 34.484 7.482 34.886 8.342 35.218C9.33 35.6 10.382 35.812 11.942 35.884C14.15 35.988 14.922 36 20 36C24.948 36 25.756 35.986 28.058 35.884C29.622 35.81 30.676 35.6 31.652 35.222C32.518 34.884 33.148 34.482 33.812 33.818C34.486 33.144 34.888 32.518 35.22 31.658C35.6 30.672 35.812 29.618 35.884 28.058C35.988 25.85 36 25.078 36 20C36 15.052 35.986 14.244 35.884 11.942C35.81 10.378 35.6 9.322 35.22 8.346C34.9186 7.53 34.4382 6.79192 33.814 6.186C33.2095 5.55969 32.471 5.07833 31.654 4.778C30.674 4.398 29.622 4.188 28.058 4.116C25.85 4.012 25.078 4 20 4ZM20 0C25.434 0 26.112 0.0199999 28.244 0.12C30.374 0.22 31.824 0.554 33.1 1.05C34.42 1.558 35.532 2.246 36.644 3.356C37.661 4.35579 38.4479 5.56518 38.95 6.9C39.444 8.174 39.78 9.626 39.88 11.756C39.974 13.888 40 14.566 40 20C40 25.434 39.98 26.112 39.88 28.244C39.78 30.374 39.444 31.824 38.95 33.1C38.4494 34.4356 37.6623 35.6452 36.644 36.644C35.6439 37.6606 34.4346 38.4475 33.1 38.95C31.826 39.444 30.374 39.78 28.244 39.88C26.112 39.974 25.434 40 20 40C14.566 40 13.888 39.98 11.756 39.88C9.626 39.78 8.176 39.444 6.9 38.95C5.56465 38.449 4.35506 37.6619 3.356 36.644C2.33881 35.6444 1.55186 34.4349 1.05 33.1C0.554 31.826 0.22 30.374 0.12 28.244C0.0259999 26.112 0 25.434 0 20C0 14.566 0.0199999 13.888 0.12 11.756C0.22 9.624 0.554 8.176 1.05 6.9C1.55047 5.56436 2.33761 4.35464 3.356 3.356C4.35534 2.33846 5.56486 1.55146 6.9 1.05C8.176 0.554 9.624 0.22 11.756 0.12C13.888 0.0259999 14.566 0 20 0Z"
              fill="#00002D"
            />
          </svg>
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.212 5.99C35.06 5.394 34.628 4.944 34.134 4.806C33.26 4.56 29 4 20 4C11 4 6.744 4.56 5.862 4.806C5.374 4.942 4.942 5.392 4.788 5.99C4.57 6.838 4 10.392 4 16C4 21.608 4.57 25.16 4.788 26.012C4.94 26.606 5.372 27.056 5.864 27.192C6.744 27.44 11 28 20 28C29 28 33.258 27.44 34.138 27.194C34.626 27.058 35.058 26.608 35.212 26.01C35.43 25.162 36 21.6 36 16C36 10.4 35.43 6.84 35.212 5.99ZM39.086 4.996C40 8.56 40 16 40 16C40 16 40 23.44 39.086 27.004C38.578 28.974 37.092 30.524 35.21 31.048C31.792 32 20 32 20 32C20 32 8.214 32 4.79 31.048C2.9 30.516 1.416 28.968 0.914 27.004C5.96046e-08 23.44 0 16 0 16C0 16 5.96046e-08 8.56 0.914 4.996C1.422 3.026 2.908 1.476 4.79 0.952C8.214 -3.57628e-07 20 0 20 0C20 0 31.792 -3.57628e-07 35.21 0.952C37.1 1.484 38.584 3.032 39.086 4.996ZM16 23V9L28 16L16 23Z"
              fill="#00002D"
            />
          </svg>
          <svg
            width="21"
            height="40"
            viewBox="0 0 21 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 23H19L21 15H14V11C14 8.94 14 7 18 7H21V0.28C20.348 0.194 17.886 0 15.286 0C9.856 0 6 3.314 6 9.4V15H0V23H6V40H14V23Z"
              fill="#00002D"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};
