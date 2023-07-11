import React, {useEffect, useState} from 'react';
import Input from "./components/Input";
import List from "./components/List";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {addTodo, fetchTodo} from "./ReduxTK/slices/todoSlice";
import './App.css';

const App = () => {
    const [title, setTitle] = useState('')
    const {error, pending} = useAppSelector(state => state.todo)
    const [theme, setTheme] = useState('light')
    const dispatch = useAppDispatch()

    useEffect(() => {
        document.body.setAttribute('theme-data', theme)
    })


    useEffect(() => {
        dispatch(fetchTodo())
    },[])

    const addTask = () => {
        dispatch(addTodo(title))
    }

    const handleThem = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className={'App'}>
            <div className={'headerR'}>
                <button onClick={handleThem}>theme</button>
            </div>
            <div className={'headerL'}>
                <Input title={title} setTitle={setTitle} addTodo={addTask}/>

            </div>
            <div className={'n'}>
                {pending && <h3>Loading...</h3>}
                {error && <h3>{error}</h3>}
                <List/>
            </div>
        </div>
    );
};

export default App;