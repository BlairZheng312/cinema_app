import { createSlice } from '@reduxjs/toolkit'

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState: {
        cinemaList: []
    },
    reducers: {
        setCinemaList(state, action) {
            state.cinemaList = action.payload
        }
    }
})

export const { setCinemaList } = cinemaSlice.actions
export default cinemaSlice.reducer