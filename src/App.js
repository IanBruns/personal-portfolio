import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
