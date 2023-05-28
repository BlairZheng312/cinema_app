import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default function Tabbar() {
  return (
    <ul>
        <li>
          <NavLink to={'/'}>Film</NavLink>
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

