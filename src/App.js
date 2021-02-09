import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import AboutPage from './routes/AboutPage/AboutPage';
import ContactPage from './routes/ContactPage/ContactPage';
import HomePage from './routes/HomePage/HomePage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import ProjectPage from './routes/ProjectPage/ProjectPage';

function App() {
  const menuButtons = ['Home', 'About', 'Projects', 'Contact'].map((field, i) => {
    let linkTitle;
    field === 'Home'
      ? linkTitle = ''
      : linkTitle = field

    return (
      <div key={i}>
        <Link to={`/${linkTitle}`}>
          <button className='button'>{`${field}`}</button>
        </Link>
      </div>
    )
  })

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <div className='sidebar'>
          {menuButtons}
        </div>

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
