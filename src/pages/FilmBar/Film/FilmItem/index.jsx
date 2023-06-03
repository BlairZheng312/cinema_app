import React from 'react'
// import bus from '../pub_sub'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilmContext } from '../..'
import style from './index.module.css'

export default function FilmItem(props) {
    const { name, grade, synopsis, nation, poster, filmId } = props.item
    const { dispatch } = useContext(FilmContext)
    const navigate = useNavigate()
    const showFilePage = (filmId) => {
        navigate(`/film/detail/${filmId}`)
    }

    return (
        <div className={style.filmList} onClick={()=>showFilePage(filmId)}
            onMouseEnter={() => {
                // bus.publish(synopsis) 
                // filmContext.updateDetail(synopsis)
                dispatch({
                    type: 'updateDetail',
                    value: synopsis
                })
            }}
            onMouseLeave={() => {
                dispatch({
                    type: 'updateDetail',
                    value: ''
                })
            }}>
            <img src={poster} alt={name} />
            <h4 className={style.filmName}>{name}</h4>
            <div>Grade: {grade}</div>
            <div>Nation: {nation}</div>
        </div>
    )
}
