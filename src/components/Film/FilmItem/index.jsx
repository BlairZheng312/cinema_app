import React from 'react'
import './index.css'
// import bus from '../pub_sub'
import { useContext } from 'react'
import { FilmContext } from '../../FilmBar'

export default function FilmItem(props) {
    const { name, grade, synopsis, nation, poster } = props.item
    const { dispatch } = useContext(FilmContext)
    return (
        <div className='filmList' onClick={() => {
            // bus.publish(synopsis) 
            // filmContext.updateDetail(synopsis)
            dispatch({
                type: 'updateDetail',
                value: synopsis
            })
        }}>
            <img src={poster} alt={name} />
            <h4 className='filmName'>{name}</h4>
            <div>Grade: {grade}</div>
            <div>Nation: {nation}</div>
        </div>
    )
}
