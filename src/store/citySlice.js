import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
    name: 'city',
    initialState: {
        cityName: 'zhangzhou'
    },
    reducers: {
        setCity(state, action) {
            state.cityName = action.payload
        }
    }
})

export const { setCity } = citySlice.actions
export default citySlice.reducer