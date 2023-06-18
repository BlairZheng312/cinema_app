import React, { useState, useEffect } from 'react'
import { useGetComingFilmQuery, useGetPlayingFilmQuery } from '../../store/filmApi'
import { List } from 'antd-mobile'
import FilmItem from './FilmItem'

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
        <div style={{ marginBottom: '70px' }}>
            <List >
                {filmList.map(item => (
                    (<FilmItem key={item.filmId} item={item} />)
                ))}
            </List>
        </div>
    )
}



