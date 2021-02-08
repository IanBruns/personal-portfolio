import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import AboutPage from './routes/AboutPage/AboutPage';
import ContactPage from './routes/ContactPage/ContactPage';
import HomePage from './routes/HomePage/HomePage'
import ProjectPage from './routes/ProjectPage/ProjectPage';

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
          <Switch>
            <Route exact path='/'
              component={HomePage}
            />
            <Route path='/about'
              component={AboutPage}
            />
            <Route path='/projects'
              component={ProjectPage}
            />
            <Route path='/contact'
              component={ContactPage}
            />
          </Switch>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
