import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  )
}

export default App;
