import React from 'react'
import { useSelector } from 'react-redux'
import style from './index.module.css'

export default function FilmDetail() {
  const detail = useSelector(state => state.detail)

  return (
    <div className={style.filmDetail}>{detail.filmDetail}</div>
  )
}
