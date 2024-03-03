import "./proyects.css";
import darkpan from "./files/darkpan.png";
import poke from "./files/poke.png";
import p1 from "./files/p1.png";
import ds from "./files/ds.png";
import ApliIMC from "./files/ApliIMC.png";
import VQ from "./files/video-question.png";
import { css, html, js, ireact, info } from "./files/tech";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

let techs = {
  js: {
    name: 'javascript',
    src: js.src
  },
  html: {
    name: 'html',
    src: html.src
  },
  css: {
    name: 'css',
    src: css.src
  },
  ireact: {
    name: 'react',
    src: ireact.src
  },
}

let d = [
  {
    imgWeb: darkpan.src,
    link: "https://essence-s.github.io/darkpan/",
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    infoText: "Este proyecto tiene animaciones simples y un diseño bonito.",
    iInfo: info.src,
  },
  {
    imgWeb: poke.src,
    link: "https://essence-s.github.io/poke/",
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    infoText:
      "Este proyecto usa la api de pokeapi , puedes buscar cualquier pokemon y ver sus estadisticas.",
    iInfo: info.src,
  },
  {
    imgWeb: VQ.src,
    link: "https://essence-s.github.io/video-question/",
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    infoText: 'web - responder las preguntas con un video o audio',
    iInfo: info.src,
  },
  {
    imgWeb: p1.src,
    link: "https://essence-s.github.io/p1/",
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    infoText: 'Animaciones y diseño simple.',
    iInfo: info.src,
  },
  {
    imgWeb: ds.src,
    link: "https://essence-s.github.io/ds/",
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    infoText: 'Web con diseño mas empresarial, con slider hero.',
    iInfo: info.src,
  },
  {
    imgWeb: ApliIMC.src,
    link: "https://essence-s.github.io/ApliIMC/",
    techs: [techs.js, techs.html, techs.css],
    infoText: 'El proyecto calcula el peso ideal de una persona, te dice en que promedio estas.',
    iInfo: info.src,
  },

];


// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//     partialVisibilityGutter: 40
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };


const Proyects = () => {


  return (
    <div className="proyects" id="proyects">
      <div className="proyects__container">
        <p className="proyects__title">Proyectos</p>

        <div className="proyects__content">


          {/* <div className="proyects__zone-info">
            Proyectos hechos con diferentes tecnologias
          </div> */}

          <div className="proyects__illu">

            {/* <Carousel
              swipeable={true}
              emulateTouch
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              infiniteLoop={true}
            > */}


            {d.map((r, i) => {
              return (
                <div className="proyects__img" key={i + 'pi'}>
                  <a href={r.link} target="_blank" rel="noreferrer">
                    <img
                      className="proyects__img-web"
                      src={r.imgWeb}
                      alt="darkpan"
                    />
                  </a>
                  <div className="proyects__info">

                    <div className="proyects__img-tech">

                      {r.techs.map((tech, i) => {
                        return (
                          <div className="proyects__img-tech-img" key={i + 'it'}>
                            <span><img src={tech.src} alt="" key={tech} /></span>
                            {tech.name}
                          </div>

                        )
                      })}
                    </div>

                    <div className="proyects__info-text">{r.infoText}</div>

                    <a href={r.link} target="_blank" rel="noreferrer">
                      <div className="proyects__info-button-deploy">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-git" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 15v-6" />
                          <path d="M15 11l-2 -2" />
                          <path d="M11 7l-1.9 -1.9" />
                          <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
                        </svg>
                        <span>Github Pages</span>
                      </div>
                    </a>
                  </div>

                </div>
              );
            })}

            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Proyects;
