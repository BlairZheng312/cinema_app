import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabSlice'
import cityReducer from './citySlice'
import detailReducer from './detailSlice'
import cinemaReducer from './cinemaSlice'
import filmApi from './filmApi'

const store = configureStore({
    reducer: {
        tab: tabReducer,
        detail: detailReducer,
        city: cityReducer,
        cinema: cinemaReducer,
        [filmApi.reducerPath]: filmApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(filmApi.middleware)
})

export default store

