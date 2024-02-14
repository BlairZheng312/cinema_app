import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import elementTable from './router'
import Tabbar from './components/Tabbar'
import './App.css'
import { autorun } from 'mobx'
import store from './mobx/store'

export default function App() {
  const element = useRoutes(elementTable)
  // const tab = useSelector(state => state.tab)

  const [showTab, setShowTab] = useState(true)

  useEffect(() => {
    autorun(() => {
      setShowTab(store.showTab)
    })
  }, [])

  return (
    <div>
      {element}
      {/* {tab.showTab && <Tabbar />} */}
      {showTab && <Tabbar />}
    </div>
  )
}


