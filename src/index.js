import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/pages/main/main'
import './index.css'
import './styles/index.less'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
