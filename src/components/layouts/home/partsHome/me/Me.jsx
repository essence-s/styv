import "./me.css";
import { Scene2 } from "@components/common";
// import mesvg from "./files/me.svg";

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
            <p>Reactjs , Nodejs , Python , Javascript , Html , Css , Figma , Blender</p>
          </div>
          <p className="me__text">

          </p>
        </div>
        <div className="me__illu">
          <Scene2></Scene2>
          {/* <img src={mesvg} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Me;
