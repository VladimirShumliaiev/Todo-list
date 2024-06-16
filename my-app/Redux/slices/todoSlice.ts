import { createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import axios from 'axios'

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

export const todoFetch = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'Todo/todoFetch',
    async (_,{rejectWithValue}) => {
        const response = await axios('https://jsonplaceholder.typicode.com/todos')

        if (!response) {
            return rejectWithValue('error fetch todo')
        }
        return await response.data
    }
)

const todoSlice = createSlice({
   name: 'Todo',
   initialState,
   reducers: {}
})

export default todoSlice.reducer

