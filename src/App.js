import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <div className='flex-one'>
          Flex 1
        </div>

        <div className='flex-four'>
          Flex 4
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
