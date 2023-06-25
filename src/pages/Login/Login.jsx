import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {InputText} from "../../common/InputText/InputText";
import { loginMe } from "../../services/apiCalls";


export const Login = () =>{

    const navigate = useNavigate();

    const [credentials, setCredentials]= useState({
        email:"",
        password:""
    });

const [welcome, setWelcome] = useState("");
//inputhandler: binding inputs through this function
const inputHandler = (e) => {
    setCredentials((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
}
 const inputCheck = (e) => {
    let errorMessage = checkError(e.target.name, e.target.value);


 }









    return (
        <div className='loginDesign'>Im login</div>
    )
}