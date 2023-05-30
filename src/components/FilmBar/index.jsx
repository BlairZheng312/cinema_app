import React from 'react'
import { useState } from 'react'
import Film from '../Film'
import './index.css'

export default function FilmBar() {
    const [isShowing, setIsShowing] = useState(true)

    return (
        <div >
            <ul className='filmBar'>
                <li onClick={() => { 
                    setIsShowing(true) }}>Is Showing</li>
                <li onClick={() => { setIsShowing(false) }}>Coming Soon</li>
            </ul>
            <Film isShowing={isShowing}/>
        </div>
    )
}
