import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/SignIn'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <SignIn />

    
  )
}

export default App
