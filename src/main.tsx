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
import Nav from './components/Nav.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <TitleBar />
      <div className="px-page max-sm:px-page relative overflow-hidden">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/upload' element={<UnderConstruction />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
)
