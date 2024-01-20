import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {fetchTodo, todoSelector} from "./redux/Slice/todoSlice";
import {useEffect} from "react";

const App = () => {

  const dispatch = useAppDispatch()
  const selector = useAppSelector(todoSelector)


  return (
    <div className="App">
      {
        selector.map(e => <div>{console.log(e.title)}</div>)
      }
    </div>
  )
}

export default App
