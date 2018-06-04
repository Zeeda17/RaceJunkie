import React, {Component} from 'react';
import {Link} from 'react-router';

class RunnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runner: {}
    }
    this.displayRaces = this.displayRaces.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/runners/${this.props.params.id}.json`, {
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
        runner: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  displayRaces(){
    if (typeof this.state.runner.id !== 'undefined') {
      const races = this.state.runner.user_races.map((race) => {
        let dash = null;
        if (race.team) {
          dash = "-";
        }
        return(
          <p key={race.id}><Link to={`/races/${race.id}`}>{race.name}</Link> {dash} <Link to={`/teams/${race.team_id}`}>{race.team}</Link></p>
        )
      })
      return(races)
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.runner.first_name} {this.state.runner.last_name}</h1>
        {this.displayRaces()}
      </div>
    )
  }
}

export default RunnerPage;
