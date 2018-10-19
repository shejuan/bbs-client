import React from 'react'
import ReactDOM from 'react-dom'
import MRoute from './routes/router'
// import App from '@/pages/main/main'
import './index.css'
import './styles/index.less'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <App /> */}
      <MRoute />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
