import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default function NabBar() {
    return (
        <div className='navBar'>
            <button>Go back</button>
            <NavLink to={'/profile'}>Profile</NavLink>
        </div>
    )
}
