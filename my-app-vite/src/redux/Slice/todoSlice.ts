import {createAppSlice} from "../../app/createAppSlice";
import axios, {create} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


type Todo = {
    id: string,
    title: string,
    completed: boolean,
}

type TodoState = {
    list: Todo[],
    error: string | null,
    loading: boolean
}

const initialState: TodoState = {
    list: [],
    error: null,
    loading: false
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'todo/fetchTodo',
    async (_, {rejectWithValue}) => {
        const response = await axios('https://jsonplaceholder.typicode.com/todos')

        if (!response) {
            return rejectWithValue('Error fetch todo')
        }

        return await response.data
    }
)

export const todoSlice = createAppSlice({
    name: 'todo',
    initialState,
    reducers: create => {},
    selectors: {
        todoSelector: (state) => state.list
    },
})
export const {todoSelector} = todoSlice.selectors
export default todoSlice.reducer