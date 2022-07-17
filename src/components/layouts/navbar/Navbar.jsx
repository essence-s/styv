import React,{useEffect, useRef, useState} from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './files/logow1.svg';
import './navbar.css';
import {SwitchTheme} from 'components/common/switchTheme/SwitchTheme';

import {motion} from 'framer-motion'

const container = {
    hidden:{ opacity: 0 },
    show:{
          opacity: 1,
          transition:{
            staggerChildren: 0.1
          }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

    

const Menu = () => (
    <>
    <motion.p variants={item}><a href="#home">Home</a></motion.p>
    <motion.p variants={item}><a href="#benefits">Benefits</a></motion.p>
    <motion.p variants={item}><a href="#us">Us</a></motion.p>
    <motion.p variants={item}><a href="#opinions">Opinions</a></motion.p>
    <motion.p variants={item}><a href="#contact">Contact</a></motion.p>
    </>
)
 

const Navbar = () => {

    let [toggleMenu,setToggleMenu] = useState(false);

    let contentLinks = useRef();
    

    useEffect(()=>{

        // console.log(nose.current);
        let links =contentLinks.current.querySelectorAll('a')
        
        let indice= contentLinks.current.querySelector('.navbar-links_container-indice')
        // console.log(indice)
        links.forEach((item,ind)=>{
            item.addEventListener('click',()=>{
                console.log(ind)
                indice.style.transform=`translateX(${75*(ind)}px)`;
            })
        })

        let indiClick = true
        let indiEleme
        window.addEventListener('scroll',()=>{
            let data=['home','benefits','us','opinions','contact']

            let scrollT = document.documentElement.scrollTop + 200
            // console.log(benefits.offsetTop)
            data.forEach((r)=>{
                let element = document.querySelector(`#${r}`)
                let offsetTopElement = element.offsetTop
                // console.log(offsetTopElement)
                
                if(!(offsetTopElement <= scrollT)) return
                
                if(!(indiEleme===r)){
                    indiEleme=r
                    indiClick=true
                }

                if(!indiClick) return

                links.forEach((item,ind)=>{
                    if(item.getAttribute('href')===`#${r}`){
                        // console.log(`click ${r}`)
                        indice.style.transform=`translateX(${75*(ind)}px)`;
                        indiClick=false
                    }
                        
                })
                
            })
        })

    })


    return(
        <motion.div className="navbar" 
          variants={container}
          initial="hidden"
          animate="show">
         
            <motion.div className="navbar_logo" variants={item}>
                <span>DarkPan</span> <img src={logo} alt="" /> 
            </motion.div>
            <div className="navbar-menu">
             
                <div className="conCloseMenu" onClick={()=>{setToggleMenu(!toggleMenu)}}>
                    <div className={`closeLine ${ toggleMenu?"cGiroFin":"cGiroInicio"}`}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className={toggleMenu?"cGiroInicio":"cGiroFin"}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
                
                {
                    toggleMenu &&(
                        <div className="navbar-menu_container scale-up-center">
                            <div className="navbar-menu_container-links">
                                <Menu/>
                            </div>
                        </div>
                    )
                }

                
            </div>

            <div className="navbar-links">
                {/* <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div> */}
                
                <div className="navbar-links_container" ref={contentLinks}>
                  <div className="navbar-links_container-indice">
                    <span></span>
                  </div>
                  <Menu/>                 
                </div>
                
            </div>

            <motion.div className="navbar_buttonSpecial" variants={item}>
              <SwitchTheme></SwitchTheme>   
            </motion.div>

        </motion.div>
    )
}

export default Navbar
