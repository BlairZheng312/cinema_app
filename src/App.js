import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import elementTable from './router'
import Tabbar from './components/Tabbar'
import './App.css'

export default function App() {
  const element = useRoutes(elementTable)
  const tab = useSelector(state => state.tab)

  return (
    <div>
      {element}
      {tab.showTab && <Tabbar />}
    </div>
  )
}


