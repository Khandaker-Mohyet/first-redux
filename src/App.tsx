import { useDispatch} from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppSelector } from "./redux/hook";


function App() {
  const dispatch = useDispatch();
  const {count} = useAppSelector((state)=>state.counter);
  

  const handleIncrement=(amount:number)=>{
    dispatch(increment({amount:amount}));
  }
  const handleDecrement=()=>{
    dispatch(decrement());
  }


  return (
    <>
    <h1>Counter with redux</h1>
      <button onClick={()=>handleIncrement(5)}>Increment by 5</button>
      <button onClick={()=>handleIncrement(1)}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
