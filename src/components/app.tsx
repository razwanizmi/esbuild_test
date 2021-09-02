import * as React from 'react'

export const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(0)

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setCount(count => count - 1)}>-</button>
        &nbsp;
        <button onClick={() => setCount(count => count + 1)}>+</button>
      </div>
    </div>
  )
}
