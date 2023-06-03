import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import FilmBar from '../pages/FilmBar';
import Cinema from '../pages/Cinema';
import Film from '../pages/FilmBar/Film';
import FilmPage from '../pages/FilmBar/FilmPage';
import Profile from '../pages/Profile/Profile';

export default function MyRouter() {
    return (
        <div>
            <Routes>
                <Route path='*' element={< Navigate to='/film' />} />
                <Route path="/film" element={< FilmBar />} >
                    <Route index element={< Navigate to='showing' isShowing={true} />} />
                    <Route path="showing" element={< Film isShowing={true} />} />
                    <Route path="comingsoon" element={< Film isShowing={false} />} />
                </Route>
                <Route path="/film/detail/:id" element={< FilmPage />} />
                <Route path="/cinema" element={< Cinema />} />
                <Route path="/profile" element={< Profile />} />

            </Routes>
        </div>
    )
}
