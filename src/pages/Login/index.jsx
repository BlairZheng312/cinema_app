import React from 'react'
import style from './index.module.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const userRef = useRef()
    const navigate = useNavigate()
    return (
        <div className={style.loginCenter}>
            <form >
                <input type="text" placeholder="username" className={style.userInfo} ref={userRef} autoComplete="off"/>
                <br />
                <input type="password" placeholder="password" className={style.userInfo} autoComplete="off"/>
                <br />
                <button className={style.btn} onClick={(e) => {
                    e.preventDefault()
                    localStorage.setItem('token', userRef.current.value)
                    navigate('/profile')
                }}>Login</button>
            </form>

        </div>
    )
}
