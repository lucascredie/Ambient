import React, { useContext, useState, useEffect } from 'react'
import ThemeContext from './themeContext';
import Nav from './components/nav';
import SoundsPage from './pages/soundsPage';
import BuildPage from './pages/buildPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('GREEN');
  const [openSMenu, setOpenSMenu] = useState(true);


  let themeName = `APP THEME ${theme}`;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themeName}>
        <Nav isOpen={openSMenu} setSoundMenu={setOpenSMenu} />
        <SoundsPage isOpen={openSMenu} />
        <BuildPage isOpen={openSMenu} />
        <a className="signature" href='http://www.lucascredie.com' target='_blank'>by Lucas Credie</a>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
