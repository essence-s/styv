import styles from './about.module.css';
import Scene2 from './Scene2/Scene2';

const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles['about__container']}>
        <div className={styles['about__info']}>
          <p className={styles['about__title']}>Sobre mi</p>
          <p className={styles['about__text']}>
            Me gusta maquetar y hacer un buen proyecto con la organización del
            equipo.
          </p>
          <div className={styles['about__technologies']}>
            <p>Las tecnologías que manejo :</p>
            <p>
              Reactjs , Nodejs , Python , Javascript , Html , Css , Figma ,
              Blender
            </p>
          </div>
          <p className={styles['about__text']}></p>
        </div>
        <div className={styles['about__illu']}>
          <Scene2></Scene2>
        </div>
      </div>
    </div>
  );
};

export default About;
