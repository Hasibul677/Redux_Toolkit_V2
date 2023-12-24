import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import { decrement, increment } from "./redux/features/counter/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div className="flex">
      <button onClick={()=> dispatch(increment())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <p className="text-red-500 mx-6">{count}</p>
      <button onClick={()=> dispatch(decrement())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Decrement
      </button>
    </div>
  );
}

export default App;
