import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import style from '../../components/Tabbar/index.module.css'

export default function FilmBar() {
    return (
        <div>
            <Header />
            <div >
                <ul className={`${style.tabBar} ${style.topBar}`}>
                    <li>
                        <NavLink to={'/film/showing'}>Is Showing</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/film/comingsoon'}>Coming Soon</NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
}
