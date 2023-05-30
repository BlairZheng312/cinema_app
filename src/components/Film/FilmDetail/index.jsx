import React from 'react'
import './index.css'
// import bus from '../pub_sub'
// import { useState } from 'react'
import { FilmContext } from '..'
import { useContext } from 'react'

export default function FilmDetail() {
  // const [filmDetail, setFilmDetail] = useState('')
  // bus.subscribe((data) => { 
  //   setFilmDetail(data)
  //  })
  const filmContext = useContext(FilmContext)
  return (
    <div className='filmDetail'>{filmContext.detail}</div>
  )
}
