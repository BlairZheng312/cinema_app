import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setTab } from '../store/tabSlice'

export default function FilmPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTab(false))
        return () => {
            dispatch(setTab(true))
        }
    }, [dispatch])

    const detail = useSelector(state => state.detail)
    const { name, runtime, synopsis, nation, poster, category, actors } = detail.filmDetail

    return (
        <>
            <img src={poster} alt={name} style={{ width: '100%', height: '200px' }} />
            <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '20px' }}>{name}</div>
                <div>{category}</div>
                <div>{nation} | {runtime}</div>
            </div>
            <hr />
            <div style={{ fontSize: "16px", padding: "20px" }}>{synopsis}</div>
            <hr />
            <div style={{ width: '360px', margin: 'auto' }}>
                {actors.slice(0, 4).map(item =>
                (<img
                    key={item.name}
                    src={item.avatarAddress}
                    alt={item.name}
                    style={{ width: '70px', height: '70px', padding: "10px" }}
                />)
                )}
            </div>

        </>

    )
}


