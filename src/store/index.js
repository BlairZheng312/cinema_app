import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabSlice'
import cityReducer from './citySlice'
import detailReducer from './detailSlice'
import filmApi from './filmApi'

const store = configureStore({
    reducer: {
        tab: tabReducer,
        detail: detailReducer,
        city: cityReducer,
        [filmApi.reducerPath]: filmApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(filmApi.middleware)
})

export default store

