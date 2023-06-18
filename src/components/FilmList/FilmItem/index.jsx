import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Image, List } from 'antd-mobile'
import { setFilmDetail } from '../../../store/detailSlice'

export default function FilmItem(props) {
    const { item } = props
    const navigate = useNavigate()
    const showFilePage = (filmId) => {
        navigate(`/film/detail/${filmId}`)
    }
    const dispatch = useDispatch()

    return (
        <div>
            <List.Item
                key={item.filmId}
                prefix={
                    <Image
                        src={item.poster}
                        width={80}
                    />
                }
                description={
                    <div>
                        <div>Runtime: {item.runtime} mins</div>
                        <div>Nation: {item.nation}</div>
                    </div>
                }
                onClick={() => {
                    showFilePage(item.filmId)
                    dispatch(setFilmDetail(item))
                }}
            >
                {item.name}
            </List.Item>
        </div>
    )
}
