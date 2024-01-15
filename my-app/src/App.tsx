import React, {useEffect, useState} from 'react';
import './App.css';
import Input from "./components/Input";
import List from "./components/List";
import {useAppDispatch} from "./hooks/hooks";
import {addTodo, fetchTodo} from "./ReduxTK/slices/todoSlice";

const App = () => {
    const [theme, setTheme] = useState('light')
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        document.body.setAttribute('theme-data', theme)
    })

    const handleThem = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])

    const addTask = () => {
        dispatch(addTodo(title))
    }


    return (
        <div className={'App'}>
            <div className={'headerR'}>
                <button onClick={handleThem}>theme</button>
            </div>
            <div className={'headerL'}>
                Todos list:
            </div>
            <div className={'n'}>
                <Input title={title} setTitle={setTitle} addTodo={addTask}/>
                <List/>
            </div>
        </div>
    );
};

export default App;