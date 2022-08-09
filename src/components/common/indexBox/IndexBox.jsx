import React from "react";
import { useEffect, useRef } from "react";
import "./indexBox.css";
import { motion } from "framer-motion";
import { container, item } from "utils/frameMotion";

const IndexBox = () => {
  let contentLinks = useRef();
  const cap = () => {
    let links = contentLinks.current.querySelectorAll("a");

    let indiClick = true;
    let indiEleme;
    window.addEventListener("scroll", () => {
      let data = ["home", "proyects", "me"];
      let scrollT = document.documentElement.scrollTop + 200;
      
      data.forEach((r) => {
        let element = document.querySelector(`#${r}`);
        let offsetTopElement = element.offsetTop;
        
        if (!(offsetTopElement <= scrollT)) return;

        if (!(indiEleme === r)) {
          indiEleme = r;
          indiClick = true;
        }

        if (!indiClick) return;

        links.forEach((item, ind) => {
          item
            .querySelector(".indexbox__shape")
            .classList.remove("ib-shape-view");
          if (item.getAttribute("href") === `#${r}`) {
            item
              .querySelector(".indexbox__shape")
              .classList.add("ib-shape-view");
            indiClick = false;
          }
        });
      });
    });
  };

  useEffect(() => {
    cap();
  }, []);

  return (
    <motion.div
      className="indexbox"
      ref={contentLinks}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <a href="#home">
        <motion.div variants={item} className="indexbox__item">
          <div className="indexbox__shape ib-shape-view">
            <div className="indexbox__shape-inside"></div>
          </div>
        </motion.div>
      </a>
      <a href="#proyects">
        <motion.div variants={item} className="indexbox__item">
          <div className="indexbox__shape">
            <div className="indexbox__shape-inside"></div>
          </div>
        </motion.div>
      </a>
      <a href="#me">
        <motion.div variants={item} className="indexbox__item">
          <div className="indexbox__shape">
            <div className="indexbox__shape-inside"></div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default IndexBox;
