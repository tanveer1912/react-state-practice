import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Team></Team>
    </>
  )
}

export default App
