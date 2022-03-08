import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
// import store from './redux/store'
import store from './redux/reduxStore'
// import StoreContext from './StoreContext'
// import { Provider } from './StoreContext'
import { Provider } from 'react-redux'

let listener = () => {
  return ReactDOM.render(
    <React.StrictMode>
      {/* <StoreContext.Provider value={store}> */}
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
      {/* </StoreContext.Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
  )
}

listener()
// store.subscribe(listener)
// store.subscribe(() => {
//   let state = store.getState()
//   listener(state)
// })
