import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCinemasQuery } from '../store/filmApi'
import { setCinemaList } from '../store/cinemaSlice'
import { List } from 'antd-mobile'
import Header from '../components/Header'

export default function Cinema() {
    const { data, isSuccess } = useGetCinemasQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        isSuccess && dispatch(setCinemaList(data.data.cinemas))
    }, [data, isSuccess, dispatch])

    const cinema = useSelector(state => state.cinema)
    const { cinemaList } = cinema

    return (
        <div >
            <Header title='Cinema' search={true} />
            <List style={{ marginBottom: '70px' }}>
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

