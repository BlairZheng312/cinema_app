import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { setTab } from '../store/tabSlice'

export default function FilmPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            <div style={{ position: 'relative', zIndex: '1' }}>
                <div>
                    <img
                        src={poster}
                        alt={name}
                        style={{ width: '100%', height: '200px' }} />
                </div>
                <Button
                    shape='rounded'
                    style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '100' }}
                    onClick={() => navigate(-1)}><LeftOutline /></Button>
            </div>
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


