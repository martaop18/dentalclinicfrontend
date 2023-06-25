import React from 'react';
import "./Footer.css";
import { useNavigate } from 'react-router-dom';

export const Footer = ()=>{
  
     const navigate = useNavigate();
    return (
        <div className="footerDesign">
    <div className="footerLinks">
      <div className='footLink' onClick={()=>navigate("/home")}>LIBERTY DC</div>
      <div className='infoLink' >18 Regent Street, London W1B 5AH | +44 020 3893 3062 | libertydentalcentre@gmail.com</div>
    </div>
        </div>
    )
}