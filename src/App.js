import React from 'react'
import './App.css'
import Tabbar from './pages/Tabbar'
import MyRouter from './router'

export default function App() {
  return (
    <div>
      <MyRouter/>
      <Tabbar />
    </div>
  )
}


