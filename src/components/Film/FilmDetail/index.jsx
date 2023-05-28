import React from 'react'
import './index.css'
import bus from '../pub_sub'
import { useState } from 'react'

export default function FilmDetail() {
  const [filmDetail, setFilmDetail] = useState('')
  bus.subscribe((data) => { 
    setFilmDetail(data)
   })
  return (
    <div className='filmDetail'>{filmDetail}</div>
  )
}
