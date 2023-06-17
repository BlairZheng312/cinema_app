import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import useCinemaList from '../hooks/useCinemaList'
import { List } from 'antd-mobile'

export default function Cinema() {
    useCinemaList()

    const cinema = useSelector(state => state.cinema)
    const { cinemaList } = cinema

    return (
        <div >
            <Header title='Cinema' search={true} />
            <List>
                {cinemaList.map(item => (
                    <List.Item
                        key={item.cinemaId}
                        description={item.address}
                    >
                        {item.name}
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

