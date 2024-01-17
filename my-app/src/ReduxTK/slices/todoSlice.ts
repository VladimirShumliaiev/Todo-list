import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type Todo = {
    id: string
    title: string
    completed: boolean
}

type TodoState = {
    todoList: Todo[]
    pending: boolean
    error: string | null
}

const initialState: TodoState = {
    todoList: [],
    pending: false,
    error: null
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'Todo/fetchTodo',
    async (_, {rejectWithValue}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        if (!response) {
            return rejectWithValue('Error fetch')
        }
        return response.data
    }
)

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'Todo/addTodo',
    async function (title, {rejectWithValue}) {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
            id: Date.now(),
            title: title,
            completed: false
        })

        if (!response) {
            return rejectWithValue('Error add todo')
        }
        return response.data
    }
)

export const toggleTodo = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodoState } }>(
    'Todo/toggleTodo',
    async (id, {getState, rejectWithValue}) => {
        const toggle = getState().todo.todoList.find(e => e.id === id)

        if (toggle) {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`)

            if (!response) {
                return rejectWithValue('error toggle')
            }
            return response.data as Todo
        }
        return rejectWithValue('ERROR GLOBAL TOGGLE')
    }
)

export const removeTodo = createAsyncThunk<string, string, { rejectValue: string }>(
    'Todo/removeTodo',
    async (id, {rejectWithValue}) => {

        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        if (!response) {
            return rejectWithValue('Error delete todo')
        }
        return id
    }
)

const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchTodo.pending, state => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todoList = action.payload
                state.pending = false
            })
            .addCase(addTodo.pending, state => {
                state.pending = false
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todoList.push(action.payload)
                state.pending = false
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggle = state.todoList.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.todoList = state.todoList.filter(e => e.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.pending = false
            })
})

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}
export default todoSlice.reducer