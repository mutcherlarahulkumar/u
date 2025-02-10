import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Podcast from './components/Podcast'
import Music from './components/Music'
import NavBar from './components/NavBar'


function App() {

  return (
   <BrowserRouter>
   <NavBar />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/podcast' element={<Podcast />} />
          <Route path='/music' element={<Music />} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
