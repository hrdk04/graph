import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset
} from "./counterSlice";

function App() {

  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>

      <h1>Redux Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      {" "}

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      {" "}

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

    </div>
  );
}

export default App;