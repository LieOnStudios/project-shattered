import { useState } from "react";
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

// Styling
import './index.css'

// Pages
import Home from './pages/Home.jsx'
import Settings from './pages/Settings.jsx'

// Extra Pages
import NotFound from './pages/NotFound.jsx'
import UnderConstruction from './pages/UnderConstruction.jsx'

// Components
import TitleBar from './components/TitleBar.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className='themes' data-theme={theme}>
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
              <Route path='/settings' element={<Settings />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;