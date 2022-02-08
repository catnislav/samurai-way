import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import store from './redux/store'
import store from './redux/reduxStore'

let listener = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

listener()
// store.subscribe(listener)
store.subscribe(() => {
  let state = store.getState()
  listener(state)
})
