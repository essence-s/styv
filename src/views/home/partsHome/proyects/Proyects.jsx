import React from "react";
import "./proyects.css";
import darkpan from "./files/darkpan.png";
import poke from "./files/poke.png";
import p1 from "./files/p1.png";
import ds from "./files/ds.png";
import ApliIMC from "./files/ApliIMC.png";
import { css, html, js, ireact, info } from "./files/tech";

let d = [
  {
    imgWeb: darkpan,
    link: "https://essence-s.github.io/darkpan/",
    techs: [js, html, css, ireact],
    infoText: "Este proyecto tiene animaciones simples y un diseño bonito.",
    iInfo: info,
  },
  {
    imgWeb: poke,
    link: "https://essence-s.github.io/poke/",
    techs: [js, html, css, ireact],
    infoText:
      "Este proyecto usa la api de pokeapi , puedes buscar cualquier pokemon y ver sus estadisticas su diseño es simple.",
    iInfo: info,
  },
  {
    imgWeb: p1,
    link: "https://essence-s.github.io/p1/",
    techs: [js, html, css, ireact],
    infoText:'Animaciones y diseño simple.',
    iInfo: info,
  },
  {
    imgWeb: ds,
    link: "https://essence-s.github.io/ds/",
    techs: [js, html, css, ireact],
    infoText:'Web con diseño mas empresarial ,con slider hero.',
    iInfo: info,
  },
  {
    imgWeb: ApliIMC,
    link: "https://essence-s.github.io/ApliIMC/",
    techs: [js, html, css],
    infoText:'El proyecto calcula el peso ideal de una persona, te dice en que promedio estas.',
    iInfo: info,
  },
];

const Proyects = () => {
  return (
    <div className="proyects" id="proyects">
      <div className="proyects__container">
        <p className="proyects__title">Proyectos</p>
        <div className="proyects__content">
          <div className="proyects__illu">
            {d.map((r,i) => {
              return (
                <div className="proyects__img" key={i}>
                  <a href={r.link} target="_blank" rel="noreferrer">
                    <img
                      className="proyects__img-web"
                      src={r.imgWeb}
                      alt="darkpan"
                    />
                  </a>
                  <div className="proyects__info">
                    <div className="proyects__img-tech">
                      {r.techs.map((tech) => {
                        return <img src={tech} alt="" key={tech} />;
                      })}
                    </div>
                    <div className="proyects__info-proyect">
                      <img src={info} alt="" />
                      <div className="proyects__info-text">{r.infoText}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
