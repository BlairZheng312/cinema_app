import React from 'react'
import style from './index.module.css'
// import bus from '../pub_sub'
// import { useState } from 'react'
import { useContext } from 'react'
import { FilmContext } from '../../../pages/Film'

export default function FilmDetail() {
  // const [filmDetail, setFilmDetail] = useState('')
  // bus.subscribe((data) => { 
  //   setFilmDetail(data)
  //  })
  const {state} = useContext(FilmContext)
  return (
    <div className={style.filmDetail}>{state.detail}</div>
  )
}
