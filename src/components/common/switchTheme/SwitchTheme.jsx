import React, { createContext, useContext, useEffect, useState } from 'react';
import './switchTheme.css';
import luna from './files/luna.svg'
import sol from './files/sol.svg'

const switchThemeContext=createContext("dino")

const useSwitchTheme=()=>{
  let {stateSwitchTheme,setStateSwitchTheme} = useContext(switchThemeContext)
  return {stateSwitchTheme,setStateSwitchTheme}
}

const ProviderSwitchTheme=({children,data})=>{ 
  return(
    <switchThemeContext.Provider value={data}>
      {children}
    </switchThemeContext.Provider>
  )
}

const DivSwitchTheme=({children,className,data})=>{
  
  let c1=data?.c1?data.c1:''
  let c2=data?.c2?data.c2:''
  let getSwTheme=false

  try{getSwTheme=JSON.parse(localStorage.getItem('LSSwitchT')).SwTheme}
  catch(e){console.log(e);
    getSwTheme=window.matchMedia('(prefers-color-scheme: light)').matches?false:true
    console.log(getSwTheme)
  }

  let [stateSwitchTheme,setStateSwitchTheme]=useState(getSwTheme)

  useEffect(()=>{
    localStorage.setItem('LSSwitchT', JSON.stringify({SwTheme:stateSwitchTheme}))
  },[stateSwitchTheme])
  
  return(
    <ProviderSwitchTheme data={{stateSwitchTheme,setStateSwitchTheme}}>
      <div className={`${className?className:''} ${stateSwitchTheme?c2:c1}`}>{children}</div>
    </ProviderSwitchTheme>
  )
}
const SwitchTheme=()=>{
    
    let {setStateSwitchTheme,stateSwitchTheme}=useSwitchTheme()  

    function cambio(){
        setStateSwitchTheme(!stateSwitchTheme)
        // console.log(stateSwitchTheme)
    }
    return(
        <div className="switchTheme" onClick={()=>cambio()}>
            
          <div className="switchTheme-contentIconLeft">
            <img src={luna} alt=""/>
          </div>
          <span style={{transform:`${stateSwitchTheme?'translate(16px, 0px)':''}`}} ></span>
          <div className="switchTheme-contentIconRight">
            <img src={sol} alt=""/>
          </div>

        </div>
    )
}

export {SwitchTheme,DivSwitchTheme,useSwitchTheme};
