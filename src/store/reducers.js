import { combineReducers } from "@reduxjs/toolkit"
import tabReducer from './tabSlice'
import cityReducer from './citySlice'
import detailReducer from './detailSlice'
import cinemaReducer from './cinemaSlice'
import filmApi from './filmApi'

const rootReducer = combineReducers({
        tab: tabReducer,
        detail: detailReducer,
        city: cityReducer,
        cinema: cinemaReducer,
        [filmApi.reducerPath]: filmApi.reducer
})

export default rootReducer