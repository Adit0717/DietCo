import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './pages/Signin.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <SignIn /> 
  )
}

export default App
