import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCity } from '../../store/citySlice'
import axios from 'axios'

export default function City() {
    const [cityList, setCityList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?k=8962877',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16857605926390438890045441"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then((res) => {
            // console.log(res.data.data.cities)
            setCityList(res.data.data.cities)
        })
    }, [])
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
