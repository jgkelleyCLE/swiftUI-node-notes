import { configureStore } from '@reduxjs/toolkit';
import { noteApi } from './NoteApi';

export const store = configureStore({
    reducer: {
        [noteApi.reducerPath]: noteApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(noteApi.middleware)
})