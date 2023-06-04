import React from 'react'
import { useParams } from 'react-router-dom'

export default function FilmPage() {
    const params = useParams()
    console.log(params)
    return (
        <div>FilmPage</div>
    )
}


