import React from 'react'
import { useReducer } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import style from '../Tabbar/index.module.css'

export const FilmContext = React.createContext()

const initialState = {
    detail: '',
    filmList: []
}

const reducer = (prevState, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case 'setFilmList':
            newState.filmList = action.value
            return newState
        case 'updateDetail':
            newState.detail = action.value
            return newState
        default:
            return prevState
    }
}

export default function FilmBar() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <FilmContext.Provider value={{
            state,
            dispatch
        }}>
            <div >
                <ul className={`${style.tabBar} ${style.topBar}`}>
                    <li>
                        <NavLink to={'/film/showing'}>Is Showing</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/film/comingsoon'}>Coming Soon</NavLink>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </FilmContext.Provider>
    )
}
