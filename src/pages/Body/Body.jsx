
import React from 'react';

import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Treatments } from '../Treatments/Treatments';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
 
export const Body = () => {
     return (
        <> 
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home />}/> 
                <Route path="/treatments" element={<Treatments />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </> 
     )
}

// si algo no existe nos lleva a home: 
// <Route path="/" element={<Home />}/> 