import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.css'

export default function Tabbar() {
  return (
    <ul className={`${style.tabBar} ${style.buttomBar}`}>
      <li>
        <NavLink to={'/film'}>Film</NavLink>
      </li>
      <li>
        <NavLink to={'/cinema'}>Cinema</NavLink>
      </li>
      <li>
        <NavLink to={'/profile'}>Profile</NavLink>
      </li>
    </ul>
  )
}

