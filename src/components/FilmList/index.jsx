import React from 'react'
import axios from 'axios'
import { useEffect, useContext } from 'react'
import FilmDetail from './FilmDetail'
import FilmItem from './FilmItem'
import { FilmContext } from '../../pages/Film'

export default function Film(props) {
    const { isShowing } = props
    const {dispatch, state} = useContext(FilmContext)

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
            // setFilmList(res.data.data.films)
            dispatch({
                type: 'setFilmList',
                value: res.data.data.films
            })
        })
    }, [isShowing, dispatch])

    return (

        <div >
            <FilmDetail />
            {state.filmList.map(item => <FilmItem item={item} key={item.filmId}/>)}
        </div>

    )
}



