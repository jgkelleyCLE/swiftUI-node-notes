import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Notes'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => ({
                url: '/api/notes',
                method: 'GET'
            }),
            providesTags: ['Notes']
        }),
        getNote: builder.query({
            query: (id) => ({
                url: `/api/notes/${id}`,
                method: 'GET'
            }),
            providesTags: ['Notes']
        }),
        createNote: builder.mutation({
            query: (formData)=> ({
                url: '/api/notes',
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['Notes']
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `/api/notes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Notes']
        }),
        updateNote: builder.mutation({
            query: ({id, formData}) => ({
                url: `/api/notes/${id}`,
                method: 'PUT',
                body: formData
            }),
            invalidatesTags: ['Notes']
        })
    })
})

export const { useGetNotesQuery, useCreateNoteMutation, useDeleteNoteMutation, useUpdateNoteMutation } = noteApi