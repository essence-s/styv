import React  from "react";
import './containerMaxWidth.css';

const ContainerMaxWidth =({children,className})=>{
    return(
        <>
            {/* <div className={'containerMaxWidth_color '+className} > */}

                <div className={'containerMaxWidth '+ className}>
                    {children}
                </div>

            {/* </div> */}
        </>
    )
}

export default ContainerMaxWidth;