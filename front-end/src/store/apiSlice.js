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
        }),

        //add transactions
        addTransaction : builder.mutation({
            query : (initialTransaction) =>({
                url : '/api/transactions',
                method: 'POST',
                body : initialTransaction

            }),

            //Delete record
            deleteTransaction : builder.mutation({
                query : (recordId) =>({
                    url : '/api/transactions',
                    method : 'DELETE',
                    body : recordId
                })
            })
        })
    })
})

export default apiSlice;