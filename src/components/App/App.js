import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Intro from '../../routes/Intro/Intro';
import About from '../../routes/About/About';
import Skills from '../../routes/Skills/Skills';
import Projects from '../../routes/Projects/Projects';
import Contact from '../../routes/Contact/Contact';

function App() {

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
