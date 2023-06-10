import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFilmDetail } from '../../../store/detailSlice'
import style from './index.module.css'

export default function FilmItem(props) {
    const { name, runtime, synopsis, nation, poster, filmId } = props.item
    const navigate = useNavigate()
    const showFilePage = (filmId) => {
        navigate(`/film/detail/${filmId}`)
    }
    const dispatch = useDispatch()

    return (
        <div className={style.filmList}
            onClick={() => {
                showFilePage(filmId)
                dispatch(setFilmDetail(''))
            }}
            onMouseEnter={() => {
                dispatch(setFilmDetail(synopsis))
            }}
            onMouseLeave={() => {
                dispatch(setFilmDetail(''))
            }}>
            <img src={poster} alt={name} />
            <h4 className={style.filmName}>{name}</h4>
            <div>Runtime: {runtime} mins</div>
            <div>Nation: {nation}</div>
        </div>
    )
}
