import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const aloha='aloha is greeting'
  const handleClick=()=>{
    setCount(++count)
    console.log(count)
  }

  return (
    <>
    <div>
      <h1>{aloha}</h1>
      {/* <button onClick={()=>alert('aloha')}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <p>count is {count}</p>
    </div>
    </>
  )
}

export default App
