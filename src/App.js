import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App" id="outer-container">
      <header>
        <Header />
      </header>

      <main id="page-wrap">
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
