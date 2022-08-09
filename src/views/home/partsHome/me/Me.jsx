import React from "react";
import "./me.css";
import mesvg from "./files/me.svg";

const Me = () => {
  return (
    <div className="me" id="me">
      <div className="me__container">
        <div className="me__info">
          <p className="me__title">Sobre mi</p>
          <p className="me__text">
            Me gusta maquetar para la web y estoy esforzandome para mejorar,
            tambien estoy que aprendo sobre React es una buena libreria me
            facina su facilidad.
          </p>
          <p>
            El mundo de la programacion es muy grande pero quiero superar esos
            retos.
          </p>
        </div>
        <div className="me__illu">
          <img src={mesvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Me;
