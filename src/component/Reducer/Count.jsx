import { useState } from "react";
import { useReducer } from "react";
import { countReducer, initState } from "./reducer";



const Count = () => {
  const[state, dispatch]=useReducer(countReducer, initState)
  // const [count, setCount] = useState(0);
  console.log(state);
  const handleIncreaseCount = () => {
    //logic
    // setCount((prev) => prev + 1);
    dispatch({type:"ADD_COUNT"})
    
  };
  const handleDecreaseCount = () => {
    //logic
    if (state.count > 0) {
      // setCount((prev) => prev - 1);
      dispatch({type:"SUB_COUNT"})
      
    }
  };
  return (
    <div className="flex gap-4">
      <button
        className="px-3 py-2 bg-green-500 rounded-sm"
        onClick={handleIncreaseCount}
      >
        {state.isLoading ?"loading":"Inc Count"}
      </button>

      <p className="mx-4">{state.count}</p>

      <button
        disabled={state.count == 0}
        className={"px-3 py-2 bg-red-500 rounded-sm disabled:bg-slate-300 disabled:text-gray-600"}
        onClick={handleDecreaseCount}
      >
        {state.isLoading ?"loading":"Dec Count"}
      </button>
    </div>
  );
};

export default Count;
