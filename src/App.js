import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Tabbar from './components/Tabbar'
import elementTable from './router'

export default function App() {
  const element = useRoutes(elementTable)
  return (
    <div>
      {element}
      <Tabbar />
    </div>
  )
}


