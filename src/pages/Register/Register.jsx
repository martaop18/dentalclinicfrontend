import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { registerMe } from '../../services/apiCalls';
import {InputText} from "../../common/InputText/InputText"
import {checkError} from "../../services/useful"
 
export const Register = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "",
        lastname:"",
        email: "",
        password: ""
      });
    
      const [credentialsError, setCredentialsError] = useState({
        nameError: "",
        lastnameError:"",
        emailError: "",
        passwordError: ""
      });
    
      const inputHandler = (e) => {
    
        setCredentials((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
      const inputCheck = (e) => {
        let errorMessage = checkError(e.target.name, e.target.value);
    
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage,
          }));
     }
     const regMe = () => {

        registerMe(credentials)
        .then(() => {
  
          setTimeout(() => {
            navigate("/");
          }, 3500);
  
        })
        .catch((error) => console.log(error));
      };

     return (
         <div className='registerDesign'>Im register
         
        
         <div>
          <div className="userSubmit">Name</div>
          <InputText
            type={"text"}
            design={
              credentialsError.nameError === ""
                ? "normalInputRegister"
                : "normalInputRegister errorInput"
            }
            placeholder={"Type your name"}
            name={"name"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorTextRegister">{credentialsError.nameError}</div>

          
         {/* <div>
          <div className="userSubmit">Lastname</div>
          <InputText
            type={"text"}
            design={
              credentialsError.lastnameError === ""
                ? "normalInputRegister"
                : "normalInputRegister errorInput"  
            }
            placeholder={"Type your lastname"}
            name={"lastname"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorTextRegister">{credentialsError.lastnameError}</div>  */}




        <div>
        <div className="userSubmit">Email</div>
          <InputText
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInputRegister"
                : "normalInput errorInput"
            }
            placeholder={"Type your email"}
            name={"email"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>

        </div>
        <div>
        <div className="userSubmit">Password</div>
          <InputText
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInputRegister"
                : "normalInput errorInput"
            }
            placeholder={"Type your password"}
            name={"password"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>
        </div>
        </div>
        <div onClick={() => regMe()} className="registerButton">Register</div>

         </div>
     )
}
