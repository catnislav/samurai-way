import './App.css';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
