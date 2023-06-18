import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { List } from 'antd-mobile'
import { SearchBar } from 'antd-mobile'

export default function Cinema() {
    const navigate = useNavigate()
    const cinema = useSelector(state => state.cinema)
    const { cinemaList } = cinema
    const [searchState, setSearchState] = useState('')

    const getCinemaList = useMemo(() => () => {
        return cinemaList.filter(item =>
            item.name.toUpperCase().includes(searchState.toUpperCase()) ||
            item.address.toUpperCase().includes(searchState.toUpperCase()))
    }, [cinemaList, searchState])

    return (
        <div style={{ padding: '20px' }}>
            <SearchBar
                placeholder='Type in cinema'
                value={searchState}
                showCancelButton={() => true}
                cancelText='Cancel'
                onChange={(e) =>
                    setSearchState(e)
                }
                onCancel={() => {
                    navigate(-1)
                }}
            />
            {searchState.length > 0 &&
                (getCinemaList().length > 0 ?
                    <List>
                        {getCinemaList().map(item => (
                            <List.Item
                                key={item.cinemaId}
                                description={item.address}
                            >
                                {item.name}
                            </List.Item>
                        ))}
                    </List> :
                    <div style={{ padding: '20px' }}>No result found</div>)}
        </div>
    )
}
