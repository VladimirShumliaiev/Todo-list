import "./App.css"
import List from "./app/components/List";
import {useEffect} from "react";
import {useAppDispatch} from "./app/hooks";
import {fetchTodo} from "./redux/Slice/todoSlice";
import Button from "./app/components/Button";


const App = () => {
    const dispatch = useAppDispatch()

  return (
    <div className="App">
        <Button/>
        {/*<List/>*/}
    </div>
  )
}

export default App
