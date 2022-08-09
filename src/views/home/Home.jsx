import {IndexBox} from "components/common";
import {Footer} from "components/layouts";
import React from "react";
import './home.css'
import { Header, Me, Proyects, } from "./partsHome";
const Home = () =>{
  return(
    <div className="home">
      <IndexBox></IndexBox>
      <Header></Header>
      <Proyects></Proyects>
      <Me></Me>
      <Footer></Footer>
    </div>
  )
}

export default Home
