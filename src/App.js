import './App.css';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import { BrowserRouter as Router } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Nav />
        <Main />
      </div>
    </Router>
  )
}

export default App
