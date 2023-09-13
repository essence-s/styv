import React, { useEffect } from "react";
import "./header.css";
import bgheader from "./files/bg21.jpg";
import { telegram, github, twitter, linkedin } from "assets/iconSR";
import { motion } from "framer-motion";
import { container, item } from "utils/frameMotion";
import { Scene } from "components/common";

const Header = () => {
  useEffect(() => {
    console.log('heaeee')
  }, [])
  return (
    <motion.div
      className="header"
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <img className="header__imgBG" src={bgheader} alt="fondojapon" />



      <div className="header__container">
        <div className="header__content">
          <div className="header__title">
            <motion.p variants={item}>Hola 🖐</motion.p>
            <motion.p variants={item}>Soy Styven, Front-end</motion.p>
            <motion.p variants={item}>Web Developer</motion.p>
          </div>
          <motion.div className="header__description" variants={item}>
            Creando interfaces atractivas y funcionales 🍃🍂✨
          </motion.div>

          <motion.div className="header__redes" variants={container}>
            <motion.div className="header__redes-content" variants={item}>
              <a
                href="https://www.linkedin.com/in/styven-huamani-corahua-ba7940244/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="imglinkedin" />
              </a>
            </motion.div>

            <motion.div className="header__redes-content" variants={item}>
              <a
                href="https://github.com/essence-s"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="imggithub" />
              </a>
            </motion.div>

            <motion.div className="header__redes-content" variants={item}>
              <a
                href="https://twitter.com/23Styv"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="imgtwitter" />
              </a>
            </motion.div>

            <motion.div className="header__redes-content" variants={item}>
              <a
                href="tg://resolve?domain=souma2299"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="imgtelegram" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className="header__scene" variants={item}>
        <Scene></Scene>
      </motion.div>

    </motion.div>
  );
};

export default Header;
