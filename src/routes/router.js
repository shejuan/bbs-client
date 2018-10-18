import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '@/pages/main/main';
import Login from '@/pages/login/index';

class MRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={App} />
        </Switch>
      </Router>
    );
  }
}

export default MRoute;
