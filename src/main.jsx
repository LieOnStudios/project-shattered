import React from "react";
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Styling
import './index.css'

// Pages
import Home from './pages/Home.jsx'

// Extra Pages
import NotFound from './pages/NotFound.jsx'
import UnderConstruction from './pages/UnderConstruction.jsx'

// Components
import TitleBar from './components/TitleBar.jsx'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TitleBar />
      <Router>
        <div className='inline-flex w-full h-svh-neg-title overflow-auto flex-grow'>
          <NavBar />
          <div className='h-full px-6 py-6 justify-center items-center bg-grey-200 overflow-auto flex-grow' id='page'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/mods' element={<UnderConstruction />}/>
              <Route path='/upload' element={<UnderConstruction />}/>
              <Route path='/profiles' element={<UnderConstruction />}/>
              <Route path='/settings' element={<UnderConstruction />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        </div>
      </Router>
  </React.StrictMode>
)
