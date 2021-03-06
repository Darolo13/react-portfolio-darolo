import React from 'react';

// components
import Topbar from './components/Topbar';

import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact'

// style 
import './app.scss'
//
import { useState } from 'react';

import Menu from './components/Menu';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;