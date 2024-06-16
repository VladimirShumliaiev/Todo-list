import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
    id: string
    title: string
    completed: boolean
}

type todoState = {
    list: Todo[],
    error: null | string
    pending: boolean
}

const initialState: todoState = {
    list: [],
    error: null,
    pending: false,
}

const todoSlice = createSlice({
   name: 'Todo',
   initialState,
   reducers: {}
})

export default todoSlice.reducer

