import React, {useEffect, useState} from 'react';

import './App.css';
import {useAppDispatch, useAppSelector} from "./Hooks/hooks";
import {addTodo, fetchTodo} from "./Redux/Slice/todoSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()
    const {error, pending} = useAppSelector(state => state.todo)

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    const addTask = () => {
        dispatch(addTodo(title))
    }
    return (
        <div className="App">
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
