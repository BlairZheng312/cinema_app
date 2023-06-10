import { createSlice } from '@reduxjs/toolkit'

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        showTab: true
    },
    reducers: {
        setTab(state, action) {
            state.showTab = action.payload
        }
    }
})

export const { setTab } = tabSlice.actions
export default tabSlice.reducer