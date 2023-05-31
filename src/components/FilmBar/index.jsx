import React from 'react'
import { useState, useReducer } from 'react'
import Film from '../Film'
import './index.css'

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
    const [isShowing, setIsShowing] = useState(true)

    return (
        <FilmContext.Provider value={{
            state,
            dispatch
        }}>
            <div >
                <ul className='filmBar'>
                    <li onClick={() => {
                        setIsShowing(true)
                        dispatch({
                            type: 'updateDetail',
                            value: ''
                        })
                    }}>Is Showing</li>
                    <li onClick={() => {
                        setIsShowing(false)
                        dispatch({
                            type: 'updateDetail',
                            value: ''
                        })
                    }}>Coming Soon</li>
                </ul>
                <Film isShowing={isShowing} />
            </div>
        </FilmContext.Provider>
    )
}
