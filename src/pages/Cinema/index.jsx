import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import style from './index.module.css'

export default function Cinema() {
    const [cinemaList, setCinemaList] = useState([])
    const [searchState, setSearchState] = useState('')
    useEffect(() => {
        axios({
            // url: 'https://m.maizuo.com/gateway?cityId=350600&ticketFlag=1&k=8578303',
            // method: 'get',
            // headers: {
            //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337","bc":"350600"}',
            //     'X-Host': 'mall.film-ticket.cinema.list'
            // }
            url: '/ajax/moreCinemas?movieId=0&day=2023-06-03&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1685763515732&cityId=209&optimus_uuid=5E628A3001A211EEAA665F6F82DBEB8930B1C952B1184A84AEBCC25D9F738834&optimus_risk_level=71&optimus_code=10',
            method: 'get'
        }).then(res => {
            // setCinemaList(res.data.data.cinemas)
            setCinemaList(res.data.cinemas.cinemas)
        })
    }, [])

    const inputHandler = (e) => {
        setSearchState(e.target.value)
    }

    const getCinemaList = useMemo(() => () => {
        return cinemaList.filter(item =>
            item.nm.toUpperCase().includes(searchState.toUpperCase()) ||
            item.addr.toUpperCase().includes(searchState.toUpperCase()))
    }, [cinemaList, searchState])

    return (
        <div className={style.cinemaList}>
            <input type="text" onChange={inputHandler} value={searchState} className={style.searchContent}/>
            {getCinemaList().map(item => <div key={item.id}>
                <div className={style.cinemaName}>{item.nm}</div>
                <div className={style.cinemaAddress}>{item.addr}</div>
            </div>)}
        </div>
    )
}

