import React, {Component} from 'react';
import {Link} from 'react-router';

class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {}
    }
    this.displayRunners = this.displayRunners.bind(this);
    this.currentUserRunning = this.currentUserRunning.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/teams/${this.props.params.id}.json`, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'})
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        team: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  displayRunners(){
    if (this.state.team.formatted_users) {
      if (this.state.team.formatted_users.length == 0) {
        return(
          <p>This team needs runners</p>
        )
      } else {
        const runners = this.state.team.formatted_users.map((runner) => {
          return(
            <h5 key={runner.id} ><Link to={`/runners/${runner.id}`}>{runner.first_name} {runner.last_name}</Link></h5>
          )
        })
      return(
        <div>
          <h4>Team Members:</h4>
          {runners}
        </div>
      )
      }

    }
  }

  currentUserRunning(){
    if (this.state.team.currentUserRunning) {
      return(
        <div>
          <p>Welcome to your team</p>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h7>{this.state.team.raceName}</h7>
        <h1>{this.state.team.name}</h1>
        <h4>{this.state.team.motto}</h4>
        {this.displayRunners()}
        {this.currentUserRunning()}
      </div>
    )
  }
}

export default TeamPage;
