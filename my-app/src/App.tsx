import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./Hooks/hooks";
import {addTodo, fetchTodo} from "./Redux/Slice/todoSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [title, setTitle] = useState('')
    const [theme, setTheme] = useState('light')
    const dispatch = useAppDispatch()
    const {error, pending} = useAppSelector(state => state.todo)

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    const addTask = () => {
        dispatch(addTodo(title))
    }

    useEffect(() => {
        document.body.setAttribute('theme-data', theme)
    },[theme])

    const onClickHandlerTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


    return (
        <div className="App">
            <button onClick={onClickHandlerTheme}>theme</button>
            <h3>Todo-List:</h3>
            <TodoInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <br/>
            {pending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <TodoList/>
        </div>
    );
}

export default App;
