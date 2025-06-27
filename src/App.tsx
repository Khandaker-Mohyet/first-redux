import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice"

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state)=>state.counter);
  

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
