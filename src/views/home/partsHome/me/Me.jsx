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
            Me gusta maquetar y hacer un buen proyecto con la organización del
            equipo
          </p>
          <div className="me__technologies">
          <p>Las tecnologías que uso son :</p>
          <p>Reactjs , javascript , html , css , nodejs y en el diseño uso figma</p>
          </div>
          <p className="me__text">
            El mundo de la programacion es muy grande y voy superar esos
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
