import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Navbar,Drone, HoverCanvas,PlaneCanvas} from './components'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
   <BrowserRouter>
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Drone/>}/>
      <Route path='/hover' element={<HoverCanvas/>}/>
      <Route path='/plane' element={<PlaneCanvas/>}/>
      
    </Routes>

   </div>
   </BrowserRouter>
  )
}

export default App
