import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import Header from '../components/Header'

export default function Film() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div>
            <Header title='Film' search={false}/>
            <div style={{ position: 'sticky', top: 45, backgroundColor: 'white', zIndex:'100' }}>
                <Tabs onChange={(value) => {
                    navigate(value)
                }} activeKey={location.pathname} >
                    <Tabs.Tab title='Is Showing' key='/film/showing'>
                    </Tabs.Tab>
                    <Tabs.Tab title='Coming Soon' key='/film/comingsoon'>
                    </Tabs.Tab>
                </Tabs>
            </div>
            <Outlet />
        </div>
    )
}
