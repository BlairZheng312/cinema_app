import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTab } from '../../store/tabSlice'

export default function FilmPage() {
    const params = useParams()
    
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(params)
        dispatch(setTab(false))
        return () => {
            dispatch(setTab(true))
        }
    },[])

    return (
        <div>FilmPage</div>
    )
}


