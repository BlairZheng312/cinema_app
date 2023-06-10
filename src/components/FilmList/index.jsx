import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import FilmDetail from './FilmDetail'
import FilmItem from './FilmItem'

export default function Film(props) {
    const { isShowing } = props
    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        axios({
            url: isShowing ? 'https://m.maizuo.com/gateway?cityId=350600&pageNum=1&pageSize=10&type=1&k=3645468' : 'https://m.maizuo.com/gateway?cityId=350600&pageNum=1&pageSize=10&type=2&k=2074546',
            method: 'get',
            headers: {
                'X-Client-Info': isShowing ? '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337","bc":"350600"}' : '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res)
            setFilmList(res.data.data.films)
        })
    }, [isShowing])

    return (

        <div >
            <FilmDetail />
            {filmList.map(item => <FilmItem item={item} key={item.filmId} />)}
        </div>

    )
}



