import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        filmDetail: {}
    },
    reducers: {
        setFilmDetail(state, action) {
            state.filmDetail = action.payload
        }
    }
})

export const { setFilmDetail } = detailSlice.actions
export default detailSlice.reducer