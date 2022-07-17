import React, { useEffect ,useRef} from "react";
import './slider.css'
import rowLeft from './files/rowLeft.svg'
import rowRight from './files/rowRight.svg'

const Slider = ({children,m=25,data}) =>{

    let numberViews = data.view;
    let widthG = data.width || "100%";
    let autoPlay = data.autoplay;   
    let transitionDuration2 = data.transitionDurationMs;
    let transitionDuration = `${transitionDuration2}ms`;
    let intervalDuration = data.intervalDurationMs;
    let view3D = data.view3D;
    let resize = data.resize;

    let slide = useRef();
    let intervalo=useRef(null);

    let endTime=true;
    let numberViewsGeneral = data.view;

useEffect(()=>{

    let init=()=>{

        let maximoSize=0
        let rez=resize.map(r=>{
            
            if(r.size>maximoSize){
                maximoSize=r.size
            }
        })

        resize.forEach(r=>{

            if(window.innerWidth < r.size){
                numberViews=r.view
            }
            if(window.innerWidth > maximoSize){
                numberViews=numberViewsGeneral
            }

        })

        slide.current.style.width=`${widthG}`
        let slidecontainer = slide.current.querySelector('.slider-container')
        let sizeWidthSlide=slide.current.offsetWidth
        
        slidecontainer.style.display='flex'

        let cc=[...slidecontainer.children]
        cc.forEach((r)=>{
            
            if(!r.classList.contains('contElement')){
                let cd=document.createElement("div")
                slidecontainer.insertBefore(cd,r).appendChild(r)
                cd.classList.add("contElement")
                cd.style.width=`${sizeWidthSlide/numberViews}px`
                cd.style.display='flex'
            }else{
                r.style.width=`${sizeWidthSlide/numberViews}px`
            }
            
        })

        let cp = slidecontainer.children.length
        slidecontainer.style.width=`${sizeWidthSlide * cp}px`

        let sizeSlide=slidecontainer.children[0].offsetWidth
        slidecontainer.style.transform=`translateX(-${sizeSlide}px)`
        

       

    }
    v3d();
    if(autoPlay){
        autoplay();
    }
    init();
    window.addEventListener('resize',()=>{
        init()
    })  
      
},[])

    let v3d = (rr)=>{
        if(view3D){

            let contElement = slide.current.querySelectorAll('.contElement')
            // let firstEle = contElement[0]
            // let endEle = contElement[2]
            // console.log(endEle)
            contElement[0].style.transition = `${transitionDuration}`;
            contElement[0].style.transform = "rotate3d(10,100,20,55deg) translateY(-60px)"
            
            contElement[1].style.transition = `${transitionDuration}`;
            contElement[1].style.transform = "rotate3d(35,100,11,35deg) translateY(-0px)"
            
            contElement[2].style.transition = `${transitionDuration}`;
            contElement[2].style.transform = "rotate3d(0,0,0,0deg) translateY(10px)"
        
            contElement[3].style.transition = `${transitionDuration}`;
            contElement[3].style.transform = "rotate3d(35,-100,-11,35deg) translateY(-0px)"
        
            contElement[4].style.transition = `${transitionDuration}`;
            contElement[4].style.transform = "rotate3d(10,-100,-20,55deg) translateY(-60px)"

        }
    }

    let v3d2 = (rr)=>{
        if(view3D){
            let contElement = slide.current.querySelectorAll('.contElement')

            contElement[1].style.transition = `${transitionDuration}`;
            contElement[1].style.transform = "rotate3d(10,100,20,55deg) translateY(-100px)"
            
            contElement[2].style.transition = `${transitionDuration}`;
            contElement[2].style.transform = "rotate3d(35,100,11,35deg) translateY(-0px)"
            
            contElement[3].style.transition = `${transitionDuration}`;
            contElement[3].style.transform = "rotate3d(0,0,0,0deg) translateY(25px)"
        
            contElement[4].style.transition = `${transitionDuration}`;
            contElement[4].style.transform = "rotate3d(35,-100,-11,35deg) translateY(-0px)"
        
            contElement[5].style.transition = `${transitionDuration}`;
            contElement[5].style.transform = "rotate3d(10,-100,-20,55deg) translateY(-100px)"
        }
    }


    let pageChange=(bon)=>{
        
        if(bon){
            next()
            
        }else{
            back()
            
        } 

    }

    let next = () =>{
        
        let slidecontainer = slide.current.querySelector('.slider-container')

        let firstElement=slidecontainer.children[0]

        let sizeSlide=slidecontainer.children[0].offsetWidth

        slidecontainer.style.transition=`${transitionDuration} ease`
        slidecontainer.style.transform=`translateX(-${sizeSlide*2}px)`

        let transition = ()=>{
            slidecontainer.style.transition='none'
            slidecontainer.style.transform=`translateX(-${sizeSlide}px)`
            slidecontainer.appendChild(firstElement)
            slidecontainer.removeEventListener('transitionend',transition)
           
        }
       
        slidecontainer.addEventListener('transitionend',transition)
        v3d2(true);
    }


    let back = () =>{
        if(endTime){
            
            endTime=false;
            let slidecontainer = slide.current.querySelector('.slider-container')
            let sizeSlide=slidecontainer.children[0].offsetWidth

            let index = slidecontainer.children.length-1
            let lastElement=slidecontainer.children[index]

            slidecontainer.insertBefore(lastElement,slidecontainer.firstChild)

            slidecontainer.style.transition='none'
            slidecontainer.style.transform=`translateX(-${sizeSlide*2}px)`
            
            let transition = ()=>{
            
                    slidecontainer.style.transition=`${transitionDuration} ease`
                    slidecontainer.style.transform=`translateX(-${sizeSlide}px)`
                
                    setTimeout(()=>{
                        endTime=true;
                    },transitionDuration2)
                  
            }

            setTimeout(() => {
                transition()
            },1)

            v3d(true);
        }
    }
  
    let autoplay = () =>{
        intervalo = setInterval(()=>{
            next()
        },intervalDuration)

        // let slidecontainer = slide.current.querySelector('.slider-container')
        // console.log(slidecontainer)
        slide.current.addEventListener('mouseenter',()=>{
            clearInterval(intervalo)
        })

        slide.current.addEventListener('mouseleave',()=>{
            intervalo = setInterval(()=>{
                next()
            },intervalDuration)
        })

       
    }

    

    return(
        <div className="slider" ref={slide}>

            <div className="slider-container" >
                {children}
            </div>

            <div className="slider-controls">
                <div className="back" 
                onClick={()=>{ pageChange(false) }}> 
                  <img src={rowLeft} alt=""/>
                </div>

                <div className="next" 
                onClick={()=>{ pageChange(true) }}>
                  <img src={rowRight} alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default Slider;
