import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import FrontPage from './containers/FrontPage'
import RacePage from './containers/RacePage'
import TeamPage from './containers/TeamPage'

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
            <Route path='/races/:id' component={RacePage} />
            <Route path='/teams/:id' component={TeamPage} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Application;
