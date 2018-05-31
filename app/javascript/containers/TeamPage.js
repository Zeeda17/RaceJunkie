import React, {Component} from 'react';

class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {}
    }
    this.displayRunners = this.displayRunners.bind(this);
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
      const runners = this.state.team.formatted_users.map((runner) => {
        return(
          <h5 key={runner.id} >{runner.first_name} {runner.last_name}</h5>
        )
      })

      return(runners)
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.team.name}</h1>
        <h3>{this.state.team.motto}</h3>
        {this.displayRunners()}
      </div>
    )
  }
}

export default TeamPage;
