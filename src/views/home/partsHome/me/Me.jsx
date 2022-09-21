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
            equipo.
          </p>
          <div className="me__technologies">
          <p>Las tecnologías que manejo :</p>
          <p>Reactjs , Javascript , Html , Css , Nodejs , Figma , Blender</p>
          </div>
          <p className="me__text">
            
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
