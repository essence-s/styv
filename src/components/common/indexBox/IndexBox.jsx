import React from "react";
import { useEffect, useRef } from "react";
import styles from "./indexBox.module.css";
import { motion } from "framer-motion";
import { container, item } from "@utils/frameMotion";

const IndexBox = () => {
  let contentLinks = useRef();
  const cap = () => {
    let links = contentLinks.current.querySelectorAll("a");
    const shapeClass = styles["indexbox__shape"];
    const activeClass = styles["ib-shape-view"];

    let indiClick = true;
    let indiEleme;
    window.addEventListener("scroll", () => {
      let data = ["home", "proyects", "about"];
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

        links.forEach((link, ind) => {
          link
            .querySelector(`.${shapeClass}`)
            .classList.remove(activeClass);
          if (link.getAttribute("href") === `#${r}`) {
            link
              .querySelector(`.${shapeClass}`)
              .classList.add(activeClass);
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
      className={styles.indexbox}
      ref={contentLinks}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <a href="#home">
        <motion.div variants={item} className={styles["indexbox__item"]}>
          <div className={`${styles["indexbox__shape"]} ${styles["ib-shape-view"]}`}>
            {/* <div className="indexbox__shape-inside"></div> */}
          </div>
        </motion.div>
      </a>
      <a href="#proyects">
        <motion.div variants={item} className={styles["indexbox__item"]}>
          <div className={styles["indexbox__shape"]}>
            {/* <div className="indexbox__shape-inside"></div> */}
          </div>
        </motion.div>
      </a>
      <a href="#about">
        <motion.div variants={item} className={styles["indexbox__item"]}>
          <div className={styles["indexbox__shape"]}>
            {/* <div className="indexbox__shape-inside"></div> */}
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default IndexBox;
