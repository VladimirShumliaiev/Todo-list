import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id: string
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[]
    error: string | null
    pending: boolean
}

const initialState: TodoState = {
    list: [],
    pending: false,
    error: null,
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'Todo/fetchTodo',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')

        if (!response.ok) {
            return rejectWithValue('Error fetch todo')
        }
        return await response.json()
    }
)

export const toggleTodo = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodoState } }>(
    'Todo/toggleTodo',
    async (id, {rejectWithValue, getState}) => {
        const toggleTodo = getState().todo.list.find(e => e.id === id)

        if (toggleTodo) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    completed: !toggleTodo.completed
                })
            })
            if (!response.ok) {
                return rejectWithValue('Error toggle todo')
            }
            return await response.json() as Todo
        }
        return rejectWithValue('Error Error Error')
    }
)

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'Todo/addTodo',
    async (title, {rejectWithValue}) => {
        const todo = {
            id: '1',
            title: title,
            completed: false,
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo),
        })
        if (!response.ok) {
            return rejectWithValue('Error add todo')
        }
        return await response.json() as Todo
    }
)

export const removeTodo = createAsyncThunk<string, string, { rejectValue: string }>(
    'Todo/removeTodo',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            return rejectWithValue('Error delete')
        }
        return id
    }
)

const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.list = action.payload
                state.pending = false
            })
            .addCase(addTodo.pending, (state) => {
                state.error = null
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.list.push(action.payload)
                state.error = null
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggle = state.list.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.list = state.list.filter(e => e.id !== action.payload)
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