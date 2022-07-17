import React from 'react';
import './socialRF.css';
import {telegram,github,twitter,facebook} from 'assets/iconSR'

const SocialRF= ()=>{
    return(
        <>
            <div className="SocialRF">

                <div className="SocialRF-content">

                    <div className="SocialRF-icon">
                      <a href='https://github.com/essence-s' target='_black'>
                        <img src={github} alt=""/>
                      </a>
                    </div>
                    
                    <div className="SocialRF-icon">
                      <a href='https://github.com/essence-s' target='_black'>
                        <img src={telegram} alt=""/>
                      </a>
                    </div>
                    <div className="SocialRF-icon">
                      <a href='https://github.com/essence-s' target='_black'>
                        <img src={twitter} alt=""/>
                      </a>
                    </div>
                    <div className="SocialRF-icon">
                      <a href='https://github.com/essence-s' target='_black'>
                        <img src={facebook} alt=""/>
                      </a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SocialRF;
