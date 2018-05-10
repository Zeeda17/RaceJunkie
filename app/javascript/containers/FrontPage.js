import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    };
    this.raceChecker = this.raceChecker.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/races`)
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
      this.setState({ races: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  raceChecker(){
    if (this.state.races.length != 0) {
      const allRaces = this.state.races.map((race) => {
        return(
          <div key={race.id} className='race-tile'>
            <RaceTile

              race={race}
            />
          </div>
        )
      })
      return(allRaces)
    } else {
      return null;
    }
  }

  render(){
    return(
      <div>
        {this.raceChecker()}
      </div>
    )
  }
}

export default FrontPage;
