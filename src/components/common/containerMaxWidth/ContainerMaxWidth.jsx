import React  from "react";
import styles from './containerMaxWidth.module.css';

const ContainerMaxWidth =({children,className})=>{
    return(
        <>
            {/* <div className={'containerMaxWidth_color '+className} > */}

                <div className={`${styles.containerMaxWidth} ${className}`}>
                    {children}
                </div>

            {/* </div> */}
        </>
    )
}

export default ContainerMaxWidth;