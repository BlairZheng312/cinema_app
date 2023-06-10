import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './index.module.css'

export default function Header() {
    const navigate = useNavigate()
    const city = useSelector(state => state.city)
    return (
        <div className={style.header}>
            <div onClick={() => { navigate('/city') }}>{city.cityName}</div>
        </div>
    )
}
