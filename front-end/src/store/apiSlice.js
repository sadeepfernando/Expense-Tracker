import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'http://localhost:5000';

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({baseUrl:baseURL}),
    endpoints: builder => ({

        //Get categories
        getCategories : builder.query({
            query:() => '/api/categories'
        }),

        //Get labels
        getLabels : builder.query({
            query : () => '/api/labels'
        })
    })
})

export default apiSlice;