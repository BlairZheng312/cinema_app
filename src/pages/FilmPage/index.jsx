import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTab } from '../../store/tabSlice'

export default function FilmPage() {
    const params = useParams()
    console.log(params)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTab(false))
        return () => {
            dispatch(setTab(true))
        }
    },[])

    return (
        <div>FilmPage</div>
    )
}


