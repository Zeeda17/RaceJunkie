import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import FrontPage from './containers/FrontPage'

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
      <div>
        <Router history={browserHistory}>
          <Route path='/'>
            <IndexRoute component={FrontPage} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Application;
