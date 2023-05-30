import React from 'react'
import './index.css'
import bus from '../pub_sub'

export default function FilmItem(props) {
    const { name, grade, synopsis, nation, poster } = props.item
    return (
        <div className='filmList' onClick={() => { bus.publish(synopsis) }}>
            <img src={poster} alt={name} />
            <h4 className='filmName'>{name}</h4>
            <div>Grade: {grade}</div>
            <div>Nation: {nation}</div>
        </div>
    )
}
