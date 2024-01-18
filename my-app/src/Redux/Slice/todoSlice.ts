import {createSlice} from "@reduxjs/toolkit";

type Todo = {
    id: string
    title: string
    completed: string
}

type TodoState = {
    list: Todo[]
    error: string | null
    pending: boolean
}

const initialState: TodoState = {
    list: [],
    error: null,
    pending: false
}

const todoSlice = createSlice<TodoState>({
    name: 'Todo',
    initialState,
    reducers: {}
})


export default todoSlice.reducer