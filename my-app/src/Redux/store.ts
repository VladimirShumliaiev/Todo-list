import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'



export const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store