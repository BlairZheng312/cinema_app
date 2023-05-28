import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import FilmDetail from './FilmDetail'
import FilmItem from './FilmItem'

export default function Film() {
    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=350600&pageNum=1&pageSize=10&type=1&k=3645468',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337","bc":"350600"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res)
            setFilmList(res.data.data.films)
        })
    }, [])

    return (
        <div >
            <FilmDetail/>
            {filmList.map(item => <FilmItem item={item} key={item.filmId}/>)}
        </div>
    )
}

