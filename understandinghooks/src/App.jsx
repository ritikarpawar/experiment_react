
import React, { useState } from 'react';

const App = () => {

  const [num, setnum] = useState(0)
  
  function increasenum(){
    setnum(num+1)
  }

  function decreasenum(){
    setnum(num-1)
  }

  function jumpby5(){
    setnum(num+5)
  }

  function makeitzero(){
    setnum(0)
  }
  return (
    <div className='container'>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>Decrease</button>
      <button onClick={jumpby5}>+5</button>
      <button onClick={makeitzero}>Reset</button>
    </div>
  )
}

export default App
