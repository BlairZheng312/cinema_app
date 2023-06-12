import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import style from './index.module.css'
import Header from '../../components/Header'
import { useGetCinemasQuery } from '../../store/filmApi'

export default function Cinema() {
    const [cinemaList, setCinemaList] = useState([])
    const [searchState, setSearchState] = useState('')

    const { data, isSuccess } = useGetCinemasQuery()

    useEffect(() => {
        isSuccess && setCinemaList(data.data.cinemas)
    }, [data, isSuccess])

    const inputHandler = (e) => {
        setSearchState(e.target.value)
    }

    const getCinemaList = useMemo(() => () => {
        return cinemaList.filter(item =>
            item.name.toUpperCase().includes(searchState.toUpperCase()) ||
            item.address.toUpperCase().includes(searchState.toUpperCase()))
    }, [cinemaList, searchState])

    return (
        <div className={style.cinemaList}>
            <Header />
            <input type="text" onChange={inputHandler} value={searchState} className={style.searchContent} />
            {getCinemaList().map(item => <div key={item.cinemaId}>
                <div className={style.cinemaName}>{item.name}</div>
                <div className={style.cinemaAddress}>{item.address}</div>
            </div>)}
        </div>
    )
}

