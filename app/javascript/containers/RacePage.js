import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {}
    }
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
      </div>
    )}
}

export default RacePage;
