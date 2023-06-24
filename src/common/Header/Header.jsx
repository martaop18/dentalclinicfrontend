import React, { useState } from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';


export const Header = ()=>{

  const [token, setToken] = useState("");

     const navigate = useNavigate();

    return (
        <div className="headerDesign">
{token !== "" 

? (
 <div>login options.....</div>
)
:(

    <div className="navBarLinks">
      <div className='navLinks' onClick={()=>navigate("/home")}>LIBERTY DC</div>
      <div className='navLinks' onClick={()=>navigate("/about")}>About Us</div>
      <div className='navLinks' onClick={()=>navigate("/treatments")}>Treatments</div>
      <div className='navLinks' onClick={()=>navigate("/register")}>New Patient</div>
      <div className='navLinks' onClick={()=>navigate("/login")}>Login</div>
      
    </div>
  
)
}   
        </div>
    )
}