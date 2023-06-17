import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
  MovieOutline,
  VideoOutline,
  UserOutline,
} from 'antd-mobile-icons'

export default function Tabbar() {
  const navigate = useNavigate()
  const tabs = [
    {
      key: '/film',
      title: 'Film',
      icon: <MovieOutline />,
    },
    {
      key: '/cinema',
      title: 'Cinema',
      icon: <VideoOutline />,
    },
    {
      key: '/profile',
      title: 'Profile',
      icon: <UserOutline />,
    },
  ]

  const location = useLocation()

  return (
    <div style={{ position: 'fixed', bottom: 0, backgroundColor: 'white', width: '100%' }}>
      <TabBar onChange={value => {
        navigate(value)
      }} activeKey={'/'+location.pathname.split('/')[1]}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}



