import React, { useEffect, useState } from 'react'

function First() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        
        document.title = `Count ${count}`;
        console.log('Called on when count changed')

    }, [count])

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count ++ </button>
       <br></br>
       <br></br>
      <button onClick={() => setCount(count - 1)}>Decrease Count -- </button>
    </div>
  )
}

export default First
