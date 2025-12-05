import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import Todo from './Todo'
import Home from './pages/Home'
import About from './pages/About'
import Offer from './pages/Offer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <> 
     
     
     
      <BrowserRouter>
       <h1>React Router Example</h1>
        <nav>
          <li>
              <Link to="/">Todo </Link> | 
              <Link  to="/home">Home </Link> |
              <Link  to="/about">About </Link> |
              <Link  to="/offer">Offer </Link>
          </li> 
        </nav>
        <br />

      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/offer' element={<Offer />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
