import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Tabbar from './components/Tabbar'
import Film from './components/Film'
import Cinema from './components/Cinema'
import Profile from './components/Profile'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={< Film />} />
        <Route path="/cinema" element={< Cinema />} />
        <Route path="/profile" element={< Profile />} />
      </Routes>
      <Tabbar />
    </div>
  )
}


