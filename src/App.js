import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { GiMaterialsScience } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineScience } from 'react-icons/md'
import { GoLaw } from 'react-icons/go'
import './App.css'
import LandingPage from './pages/LandingPage'
import Info from './pages/Info'
import About from './pages/About'
import Detail from './pages/Detail'
import Misc from './pages/Misc'
import BCS from './pages/BCS'
import BCSDetail from './pages/BCSDetail'

function App() {
  return (
    <BrowserRouter>
      <header>
        <MdOutlineScience className="icon"/>
        <p id="titleGroup">Breaking Bad Wiki</p>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bcs" element={<BCS />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/detailBCS' element={<BCSDetail />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <GiMaterialsScience className="icon" />
          BB
        </NavLink>
        <NavLink to="/bcs" className="iconWrapper">
          <GoLaw className="icon" />
          BCS
        </NavLink>
        <NavLink to="/misc" className="iconWrapper">
          <FaUserCircle className="icon" />
          Other
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
