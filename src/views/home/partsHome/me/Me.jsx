import React from "react";
import './me.css'
import mesvg from './files/me.svg' 

const Me = () =>{
  return(
    <div className="me">
      <div className="me-container">
         <div className="me-info">
            <p className="me-title">Sobre mi</p>
            <p className="me-text">
              Me gusta maquetar para la web , tambien estoy 
              que aprendo a usar React es una buena libreria 
              me facina su facilidad.
            </p>
            <p>
              Se que el mundo de la programacion 
              es muy grande pero quiero superar esos retos.
            </p>
          </div>
          <div className="me-illu">
            <img src={mesvg} alt=""/>
          </div>
      </div>
    </div>  
  )
}

export default Me
