import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Podcast from './components/Podcast'
import Music from './components/Music'
import NavBar from './components/NavBar'
import Player from './components/Player'
import "./components/player.css"


function App() {

  const [song,setSong] = useState("Finshots Daily");
    function set({songTitle}){
        setSong(songTitle);
    }

  return (
   <BrowserRouter>
   <NavBar />
       <Routes>
          <Route path='/' element={<Home setSong={setSong}/>} />
          <Route path='/podcast' element={<Podcast setSong={setSong} />} />
          <Route path='/music' element={<Music setSong={setSong}/>} />
       </Routes>
       <Player  song={song}/>
   </BrowserRouter>
  )
}

export default App
