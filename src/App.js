import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import AboutPage from './routes/AboutPage/AboutPage';
import ContactPage from './routes/ContactPage/ContactPage';
import HomePage from './routes/HomePage/HomePage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import ProjectPage from './routes/ProjectPage/ProjectPage';

function App() {
  return (
    <div className="App" id="outer-container">
      <header>
        <Header />
      </header>

      <main id="page-wrap">
        <div className='content'>
          <Switch>
            <Route exact path='/'
              component={HomePage}
            />
            <Route path='/About'
              component={AboutPage}
            />
            <Route path='/Projects'
              component={ProjectPage}
            />
            <Route path='/Contact'
              component={ContactPage}
            />
            <Route
              component={NotFoundPage}
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
