import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCity } from '../../store/citySlice'
import { useGetCityListQuery } from '../../store/filmApi'

export default function City() {
    const [cityList, setCityList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, isSuccess} = useGetCityListQuery()

    useEffect(() => {
        isSuccess && setCityList(data.data.cities)
    }, [data, isSuccess])
    return (
        <div>
            {cityList.map(item =>
                <li key={item.cityId}
                    onClick={() => {
                        dispatch(setCity(item.pinyin))
                        navigate(-1)
                    }}
                >{item.pinyin}</li>
            )}
        </div>
    )
}
