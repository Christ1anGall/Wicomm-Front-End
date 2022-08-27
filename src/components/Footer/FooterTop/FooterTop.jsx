import { yupResolver } from "@hookform/resolvers/yup";
import { AdobeFonts } from "react-adobe-fonts";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import "./FooterTop.scss";

export const FooterTop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <section className="footerTop">
      <p className="footerTop-text">{"RECEBA NOSSAS OFERTAS E NOVIDADES"}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="footerTop-form">
        <div>
          {errors.name && errors.name?.message}
          <input
            type="text"
            placeholder="Digite seu nome"
            className="footerTop-form-inputName"
            {...register("name")}
          />
        </div>
        <div>
          {errors.email && errors.email?.message}
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
            className="footerTop-form-inputEmail"
          />
        </div>
        <button type="submit" className="footerTop-form-button">
          CADASTRAR
        </button>
      </form>
    </section>
  );
};
