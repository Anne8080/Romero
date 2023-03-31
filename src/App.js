import React from 'react';
import Home from "./pages/home/Home";
import Intro from "./pages/intro/Intro";
import Account from "./pages/account/Account";
import Settings from "./pages/settings/Settings";
import Transaction from "./pages/transaction/Transaction";
// import './App.css';

import {useContext, useState} from "react"

import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Login from './pages/login/Login';
import Create from './pages/create/Create';
import Register from './pages/register/Register';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Intro />}/>
            <Route path="welcome">
              <Route index element={<Create/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
            </Route>
            <Route path="users">
              <Route index element={<Account/>}/>
              <Route path="transaction" element={<Transaction/>}/>
              <Route path="settings" element={<Settings/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
