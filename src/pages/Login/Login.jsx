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

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: "",
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

    setCredentialsError((prevState) => ({
        ...prevState,
        [e.target.name + "Error"]: errorMessage,
      }));
 }

 const logMe = () => {
    
    loginMe(credentials)
      .then((results) => {
        let decodificated = jwt_decode(results.data.token);
        console.log(results.data.token)
        console.log(decodificated);
  
        setTimeout(() => {
          navigate("/");
        }, 3500);
  
        setWelcome(`Welcome back, ${decodificated.name}`);
      })
      .catch((error) => console.log(error));
  };

    return (
        <div className='loginDesign'>
            {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div className="userSubmit">
          {/* La utilidad de la siguiente linea es renderizar un hook a tiempo real en el DOM */}
          {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}

          <InputText
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Email"}
            name={"email"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>
          <InputText
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Password"}
            name={"password"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>
        </div>
      )}
         <div onClick={() => logMe()} className="loginButton">
            Login
            </div>
         
        </div>
    )
}