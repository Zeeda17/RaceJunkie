import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'
import RaceRegister from '../components/RaceRegister'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {},
      userRegistered: {}
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
  }

  handleRegistrationSubmit(){

    console.log(`${this.props.params.id}`)
    let payload = this.state.race
    fetch(`/api/v1/races/${this.props.params.id}/registrations`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })//.then(response => response.json())
    .then(response => console.log(response))
  }

  componentDidMount(){
    fetch(`/api/v1/races/${this.props.params.id}`)
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
      this.setState({ race: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return(
      <div>
        <h2>{this.state.race.name} - {this.state.race.distance}</h2>
        <h4>${this.state.race.price}</h4>
        <p>{this.state.race.description}</p>
        <RaceRegister
          handleRegistrationSubmit={this.handleRegistrationSubmit}
        />
      </div>
    )}
}

export default RacePage;
