import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Component Mounted');
  }, [])

  useEffect(() => {
    console.log('Counter state changed');
  }, [count])

  return(
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Go Up!</button>
    </>
  )
}

export default Counter;
