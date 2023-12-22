import React from 'react'
import NavBar from "./components/NavBar"
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

export default function App(){
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path = '/' exact Component={Home}/>
        </Routes>
      </Router> 
    </>
  );
}

// typescript will yell if component starts with lowercase

