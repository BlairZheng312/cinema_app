import React from 'react'
import { Navigate } from "react-router-dom";
import Film from '../pages/Film';
import Cinema from '../pages/Cinema';
import FilmList from '../components/FilmList';
import FilmPage from '../pages/FilmPage';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import City from '../pages/City';
import Auth from '../components/Auth';
import Search from '../pages/Search';

const elementTable = [
    {
        path: '*',
        element: < Navigate to='/film' />
    },
    {
        path: '/film',
        element: < Film />,
        children: [
            {
                index: true,
                element: < Navigate to='showing' isShowing={true} />
            },
            {
                path: 'showing',
                element: < FilmList isShowing={true} />,
            },
            {
                path: 'comingsoon',
                element: < FilmList isShowing={false} />,
            },
        ]
    },
    {
        path: '/film/detail/:id',
        element: < FilmPage />
    },
    {
        path: '/cinema',
        element: < Cinema />
    },
    {
        path: '/cinema/search',
        element: < Search />
    },
    {
        path: '/profile',
        element:
            <Auth>
                <Profile />
            </Auth>
    },
    {
        path: '/login',
        element: < Login />
    },
    {
        path: '/city',
        element: < City />
    },
]

export default elementTable