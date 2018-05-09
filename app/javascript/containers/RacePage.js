import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'
import RaceRegister from '../components/RaceRegister'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {}
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
  }

  handleRegistrationSubmit(){
    console.log(this.state.race)
    console.log(JSON.stringify(this.state.race))
    fetch('/api/v1/races', {
      method: 'POST',
      body: JSON.stringify(this.state.race),
      // headers: { 'Content-Type': 'application/json' }//do I need this?
    }).then(response => response.json())
  }

  componentDidMount(){
    // debugger
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
