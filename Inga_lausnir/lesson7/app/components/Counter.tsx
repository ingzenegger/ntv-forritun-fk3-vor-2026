import { useContext, useReducer } from "react";
import { CountContext } from "../root";
import type { CountContextType } from "../root";

function Counter() {
  const { state, dispatch } = useContext(CountContext) as CountContextType;
  return (
    <div>
      <hr></hr>
      <hr></hr>
      <h1>Here is the counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

export default Counter;
