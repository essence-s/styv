import React from "react";
import './cardB.css'
const CardB = ({children,className,data,...others}) =>{
  return(
    <div className={`cardB ${className?className:''}`} 
      style={{background:data.background}} {...others}>
      {children}
      <div className="cardB-img"><img src={data.img} alt=""/></div>
      <div className="cardB-title">{data.title}</div>
      {/* <div className="cardB-description">{data.description}</div> */}
    </div>
  )
}

export default CardB;
