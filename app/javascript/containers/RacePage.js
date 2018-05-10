import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'
import RaceRegister from '../components/RaceRegister'
import TeamTile from '../components/TeamTile'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {},
      showTeams: false
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
    this.showTeams = this.showTeams.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.buttonLabel = this.buttonLabel.bind(this)
  }

  handleRegistrationSubmit(){
    let payload = this.state.race
    fetch(`/api/v1/races/${this.props.params.id}/registrations`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })//.then(response => response.json())
    .then(response => console.log(response))
  }

  showTeams(){
    // debugger;
    if (this.state.race.teams == null) {
      return null;
    } else if (this.state.showTeams) {
        const allTeams = this.state.race.teams.map((team) =>{
          return(
            <div key={team.id}>
              <TeamTile
                team={team}
              />
            </div>
          )
        })
        return(allTeams)
      } else {
        return null;
      }
  }

  componentDidMount(){
    //
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
      this.setState({
        race: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  buttonLabel(){
    if (this.state.showTeams){
      return "Hide Teams"
    } else {
      return "Show Teams"
    }
  }

  handleClick(){
    if (this.state.showTeams){
      this.setState({showTeams: false})
    } else {
      this.setState({showTeams: true})
    }
  }

  render(){

    return(
      <div>
        <div className="columns small-8 medium-7" id="left">
          <div className="race-breakdown">
            <div className='.race-breakdown-title'>
              <h2>{this.state.race.name} - {this.state.race.distance}</h2>
              <h4>${this.state.race.price}</h4>
            </div>
            <div className='race-breakdown-info'>
              <p>{this.state.race.description}</p>
              <button className='display-teams' onClick={this.handleClick} >{this.buttonLabel()}</button>
              {this.showTeams()}
            </div>
          </div>
        </div>

        <div className="columns small-4 medium-5" id="right">
          <div className="map-registration">
            <RaceRegister
              handleRegistrationSubmit={this.handleRegistrationSubmit}
            />
          </div>
        </div>
      </div>
    )}
}

export default RacePage;
