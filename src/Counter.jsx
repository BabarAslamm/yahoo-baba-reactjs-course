import { useState } from "react";

export default function Counter() {
 
    const [count, setCount] = useState(0);

    const handleIncrease = () => {

        setCount( count + 1 );
    }

    const handleDecrease = () => {

        setCount( count - 1 );
    }

  return (
    <>
       <h2>Count : {count}</h2>

       <button onClick={handleIncrease}>Increase++</button>

       <br />
       <br />

       <button onClick={handleDecrease}>Decrease--</button>

    </>
  )


}
