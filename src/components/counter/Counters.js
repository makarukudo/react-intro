import React, { useState } from 'react';

const initState = {
  counter1: 0,
  counter2: 3,
  counter3: 2
}

const Counter = ({ value, onClick }) => (
  <div className="counter" onClick={onClick}>{value}</div>
)

function Counters() {
  const [state, setState] = useState(initState)

  const handleIncrement = (name, value) => {
    setState({ ...state, [name]: value })
  }

  const resetState = () => {
    setState(initState)
  }

  return (
    <React.Fragment>
      <Counter
        value={state.counter1}
        onClick={() => handleIncrement('counter1', state.counter1 + 1)}
        />
      <Counter
        value={state.counter2}
        onClick={() => handleIncrement('counter2', state.counter2 - 1)}
        />
      <Counter
        value={state.counter3}
        onClick={() => handleIncrement('counter3', state.counter3 * 2)}
        />
    </React.Fragment>
  )
}

export default Counters;
