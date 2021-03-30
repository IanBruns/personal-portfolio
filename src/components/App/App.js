import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Header from '../Header/Header';

function App() {
  const isDesktop = useMediaQuery({ minDeviceWidth: 800 })

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        {isDesktop && (
          <p>Desktop</p>
        )}
        {!isDesktop && (
          <p>mobile</p>
        )}
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
