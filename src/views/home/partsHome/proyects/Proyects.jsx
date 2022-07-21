import React from "react";
import "./proyects.css";
import darkpan from "./files/darkpan.png";
import poke from "./files/poke.png";
import p1 from "./files/p1.png";
const Proyects = () => {
  return (
    <div className="proyects">
      <div className="proyects-container">
        <div className="proyects-content">
          <div className="proyects-info">
            <p className="proyects-title">Proyects</p>
            <p className="proyects-text">
              Estos son algunos de mis proyectos hechos con Reactjs trato de que
              sean bonitas y minimalistas aun estoy iniciando y esforzandome
              para mejorar.
            </p>
          </div>
          <div className="proyects-illu">
            <div className="proyects-illuImg">
              <a
                href="https://essence-s.github.io/darkpan/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={darkpan} alt="darkpan" />
              </a>
            </div>
            <div className="proyects-illuImg">
              <a
                href="https://essence-s.github.io/poke/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={poke} alt="" />
              </a>
            </div>
            <div className="proyects-illuImg">
              <a
                href="https://essence-s.github.io/p1/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p1} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
