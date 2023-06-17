import { useGetCinemasQuery } from '../store/filmApi'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCinemaList } from '../store/cinemaSlice'

export default function useCinemaList() {
    const { data, isSuccess } = useGetCinemasQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        isSuccess && dispatch(setCinemaList(data.data.cinemas))
    }, [data, isSuccess])
}
