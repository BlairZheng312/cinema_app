import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './index.css'

export default function Cinema() {
    const [cinemaList, setCinemaList] = useState([])
    const [searchState, setSearchState] = useState('')
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=350600&ticketFlag=1&k=8578303',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337","bc":"350600"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            setCinemaList(res.data.data.cinemas)
        })
    }, [])

    const inputHandler = (e) => {
        setSearchState(e.target.value)
    }

    const getCinemaList = () => {
        return cinemaList.filter(item =>
            item.name.toUpperCase().includes(searchState.toUpperCase()) ||
            item.name.toUpperCase().includes(searchState.toUpperCase()))
    }

    return (
        <div className='cinemaList'>
            <input type="text" onChange={inputHandler} value={searchState} />
            {getCinemaList().map(item => <div key={item.cinemaId}>
                <div className='cinemaName'>{item.name}</div>
                <div className='cinemaAddress'>{item.address}</div>
            </div>)}
        </div>
    )
}

