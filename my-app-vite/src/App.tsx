import "./App.css"
import List from "./app/components/List";
import {useEffect} from "react";
import {useAppDispatch} from "./app/hooks";
import {fetchTodo} from "./redux/Slice/todoSlice";


const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTodo())
    },[])

  return (
    <div className="App">
        <List/>
    </div>
  )
}

export default App
