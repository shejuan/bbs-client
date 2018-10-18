import React from 'react'
import ReactDOM from 'react-dom'
import MRoute from './routes/router'
import './index.css'
import './styles/index.less'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <MRoute />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
