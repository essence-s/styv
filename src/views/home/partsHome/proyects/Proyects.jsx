import React from "react";
import "./proyects.css";
import darkpan from "./files/darkpan.png";
import poke from "./files/poke.png";
import p1 from "./files/p1.png";
import ds from "./files/ds.png";
import ApliIMC from "./files/ApliIMC.png"
const Proyects = () => {
  return (
    <div className="proyects" id="proyects">
      <div className="proyects__container">
        <p className="proyects__title">Proyectos</p>
        <div className="proyects__content">
          <div className="proyects__illu">
            <div className="proyects__img">
              <a
                href="https://essence-s.github.io/darkpan/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={darkpan} alt="darkpan" />
              </a>
            </div>
            <div className="proyects__img">
              <a
                href="https://essence-s.github.io/poke/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={poke} alt="" />
              </a>
            </div>
            <div className="proyects__img">
              <a
                href="https://essence-s.github.io/p1/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p1} alt="" />
              </a>
            </div>
            <div className="proyects__img">
              <a
                href="https://essence-s.github.io/ds/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ds} alt="" />
              </a>
            </div>
            <div className="proyects__img">
              <a
                href="https://essence-s.github.io/ApliIMC/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ApliIMC} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
