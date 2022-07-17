import React from "react";
import "./header.css";
import bgheader from "assets/bg2.jpg";
import { telegram, github, twitter, facebook } from "assets/iconSR";
import { motion } from "framer-motion";

const container = {
    hidden:{ opacity: 0 },
    show:{
          opacity: 1,
          transition:{
            delayChildren:0.7,
            staggerChildren: 0.1
          }
    }
}
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Header = () => {
  return (
    <motion.div className="header" 
      variants={container}
      initial="hidden"
      animate="show">

      <img className="header-imgBG" src={bgheader} alt="fondojapon" />
      <div className="header-container">
        <div className="header-content">
          <div className="header-title">
            <motion.p variants={item}>Hola 🖐</motion.p>
            <motion.p variants={item}>Soy Styven, Front-end</motion.p>
            <motion.p variants={item}>Web Developer</motion.p>
          </div>
          <motion.div className="header-description" variants={item}>
            Me Gusta hacer Productos Frontend Minimalistas y escalables
          </motion.div>

          <motion.div className="header-redes" variants={container}>
            
            <motion.div className="header-redesContent" variants={item}>
              <a href="https://github.com/essence-s" target="_blank" rel="noreferrer">
                <img src={telegram} alt="imgTelegram" />
              </a>
            </motion.div>

            <motion.div className="header-redesContent" variants={item}>
              <a href="https://github.com/essence-s" target="_blank" rel="noreferrer">
                <img src={github} alt="" />
              </a>
            </motion.div>

            <motion.div className="header-redesContent" variants={item}>
              <img src={twitter} alt="" />
            </motion.div>

            <motion.div className="header-redesContent" variants={item}>
              <img src={facebook} alt="" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Header;
