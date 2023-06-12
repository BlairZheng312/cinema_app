import React, { useState } from 'react'
import { useEffect } from 'react'
import FilmDetail from './FilmDetail'
import FilmItem from './FilmItem'
import { useGetComingFilmQuery, useGetPlayingFilmQuery } from '../../store/filmApi'

export default function Film(props) {
    const { isShowing } = props
    const [filmList, setFilmList] = useState([])

    const { data: playingData, isSuccess: playingSucess } = useGetPlayingFilmQuery()
    const { data: comingData, isSuccess: comingSucess } = useGetComingFilmQuery()
    useEffect(() => {
        (isShowing && playingSucess) && setFilmList(playingData.data.films);
        (!isShowing && comingSucess) && setFilmList(comingData.data.films)
    }, [isShowing, playingData, playingSucess, comingSucess, comingData])

    return (
        <div >
            <FilmDetail />
            {filmList.map(item => <FilmItem item={item} key={item.filmId} />)}
        </div>
    )
}



