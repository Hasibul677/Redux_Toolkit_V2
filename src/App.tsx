import { decrement, incrementByAmount } from "./redux/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.counter);

  return (
    <div className="flex">
      <button
        onClick={() => dispatch(incrementByAmount(10))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <p className="text-red-500 mx-6">{count}</p>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
