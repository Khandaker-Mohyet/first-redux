import { useDispatch} from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppSelector } from "./redux/hook";


function App() {
  const dispatch = useDispatch();
  const {count} = useAppSelector((state)=>state.counter);
  

  const handleIncrement=()=>{
    dispatch(increment());
  }
  const handleDecrement=()=>{
    dispatch(decrement());
  }


  return (
    <>
    <h1>Counter with redux</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
