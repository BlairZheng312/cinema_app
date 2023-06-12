import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const filmApi = createApi({
    reducerPath: 'filmApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://m.maizuo.com/gateway'
    }),
    endpoints(build) {
        return {
            getCinemas: build.query({
                query() {
                    return {
                        url: '?cityId=350600&ticketFlag=1&k=8578303',
                        headers: {
                            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337","bc":"350600"}',
                            'X-Host': 'mall.film-ticket.cinema.list'
                        }
                    }
                }
            }),
            getPlayingFilm: build.query({
                query() {
                    return {
                        url: '?cityId=350600&pageNum=1&pageSize=10&type=1&k=3645468',
                        headers: {
                            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337","bc":"350600"}',
                            'X-Host': 'mall.film-ticket.film.list'
                        }
                    }
                }
            }),
            getComingFilm: build.query({
                query() {
                    return {
                        url: '?cityId=350600&pageNum=1&pageSize=10&type=2&k=2074546',
                        headers: {
                            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16847517845581271346446337"}',
                            'X-Host': 'mall.film-ticket.film.list'
                        }
                    }
                }
            }),
            getCityList: build.query({
                query() {
                    return {
                        url: '?k=8962877',
                        headers: {
                            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16857605926390438890045441"}',
                            'X-Host': 'mall.film-ticket.city.list'
                        }
                    }
                }
            })
        }
    }
})

export const {
    useGetCinemasQuery,
    useGetPlayingFilmQuery,
    useGetComingFilmQuery,
    useGetCityListQuery
} = filmApi

export default filmApi