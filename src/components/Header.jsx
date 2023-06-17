import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavBar, Space } from 'antd-mobile'
import { EnvironmentOutline, SearchOutline } from 'antd-mobile-icons'

export default function Header(props) {
    const navigate = useNavigate()
    const city = useSelector(state => state.city)

    const search = () => {
        navigate('/cinema/search')
    }

    const right = (props.search ?
        <div style={{ fontSize: 24 }} onClick={search}>
            <Space style={{ '--gap': '16px' }}>
                <SearchOutline />
            </Space>
        </div> : <></>
    )

    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '100', backgroundColor: 'white' }}>
            <NavBar
                back={city.cityName}
                backArrow={<EnvironmentOutline />}
                right={right}
                onBack={() => { navigate('/city') }}
            >{props.title}</NavBar>
        </div>
    )
}
