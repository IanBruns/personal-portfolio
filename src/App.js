import { Switch, Route, Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu'
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
        <Menu pageWrapId={"page-wrap"}>
          <Link className="menu-item" to="/">Home</Link>
          <Link className="menu-item" to="/About">About</Link>
          <Link className="menu-item" to="/Projects">Projects</Link>
          <Link className="menu-item" to="/Contact">Contact</Link>
        </Menu>
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
