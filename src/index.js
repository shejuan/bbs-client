import React from 'react'
import ReactDOM from 'react-dom'
import MRoute from './routes/router'
// import App from '@/pages/main/main'
import './index.css'
import './styles/index.less'
import registerServiceWorker from './registerServiceWorker'
<<<<<<< HEAD
import { HashRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    {/* <App /> */}
    <MRoute />
  </Router>,
=======
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
>>>>>>> 2d539a4f927bf9c09db9470e1c3cd212f5c1689a
  document.getElementById('root')
)
registerServiceWorker()
