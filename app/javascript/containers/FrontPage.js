import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      featuredRace: []
    };
    this.raceChecker = this.raceChecker.bind(this);
    this.featuredRace = this.featuredRace.bind(this)
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
      let featuredHolder = body.splice(Math.floor(Math.random()*body.length), 1)
      this.setState({
        races: body,
        featuredRace: featuredHolder[0]
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  featuredRace(){
    if (this.state.featuredRace.length != 0) {

        return(
          <div className='featured-race'>
            <RaceTile
              race={this.state.featuredRace}
            />
          </div>
        )
    } else {
      return null;
    }
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
        <h1 className='featured-race-title'>Featured Race</h1>
        {this.featuredRace()}
        <h2 className='upcoming-races-title'>Upcoming Races</h2>
        {this.raceChecker()}
      </div>
    )
  }
}

export default FrontPage;
