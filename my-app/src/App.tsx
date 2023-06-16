import React, {useEffect, useState} from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {useAppDispatch, useAppSelector} from "./Hooks/hooks";
import {addTodo, fetchTodo} from "./Redux/Slice/todoSlice";


function App() {
    const [title, setTitle] = useState('')
    const [theme, setTheme] = useState('light')
    const dispatch = useAppDispatch()
    const {error, pending} = useAppSelector(state => state.todo)



    useEffect(() => {
        document.body.setAttribute('theme-data', theme)
    },[theme])

    const onClickHandlerTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])

    const addTask = () => {
        dispatch(addTodo(title))
    }

    return (
        <div className="App">
            <button onClick={onClickHandlerTheme}>theme</button>
            <h3>To-do list:</h3>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {pending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <TodoList/>
        </div>
    );
}

export default App;
