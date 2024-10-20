import React from "react";
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Styling
import './index.css'

// Pages
import Home from './pages/Home.tsx'

// Extra Pages
import NotFound from './pages/NotFound.tsx'
import UnderConstruction from './pages/UnderConstruction.tsx'

// Components
import TitleBar from './components/TitleBar.tsx'
import NavBar from './components/NavBar.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <TitleBar />
      <Router>
        <div className='inline-flex w-full flex-grow'>
          <NavBar />
          <div className='flex flex-col justify-center bg-grey-200 flex-grow'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/upload' element={<UnderConstruction />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        </div>
      </Router>
  </React.StrictMode>
)
