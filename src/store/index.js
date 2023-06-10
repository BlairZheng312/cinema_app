import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabSlice'
import cityReducer from './citySlice'
import detailReducer from './detailSlice'

const store = configureStore({
    reducer: {
        tab: tabReducer,
        detail: detailReducer,
        city: cityReducer
    }
})

export default store

