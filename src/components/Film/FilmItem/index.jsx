import React from 'react'
import './index.css'

export default function FilmItem(props) {
    const { name, grade, filmId, synopsis, nation, poster } = props.item
    return (
        <div key={filmId} className='filmList'
            onClick={() => {
                props.showFilmDetail(synopsis)
            }}>
            <img src={poster} alt={name} />
            <h4 className='filmName'>{name}</h4>
            <div>Grade: {grade}</div>
            <div>Nation: {nation}</div>
        </div>
    )
}
