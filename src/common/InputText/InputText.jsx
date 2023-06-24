import React from "react";
import "./InputText.css";

export const InputText = ({type, placeholder, name,design, functionHandler, onBlurFunction}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={design}
                onChange={(e)=>functionHandler(e)}
                onBlur={(e)=>onBlurFunction(e)}
            />
        </>
    )
}