import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'
import RaceRegister from '../components/RaceRegister'
import TeamTile from '../components/TeamTile'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {},
      selectedTeam: false,
      showRunners: false
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
    this.selectedTeam = this.selectedTeam.bind(this)
    this.teamHandleClick = this.teamHandleClick.bind(this)
    this.teamButtonLabel = this.teamButtonLabel.bind(this)
    this.runnerHandleClick = this.runnerHandleClick.bind(this)
    this.runnerButtonLabel = this.runnerButtonLabel.bind(this)
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

  selectedTeam(){
    // debugger;
    if (this.state.race.teams == null) {
      return null;
    } else if (this.state.selectedTeam) {
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

  showRunners(){
    // debugger;
    if (this.state.race.teams == null) {
      return null;
    } else if (this.state.selectedTeam) {
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

  teamButtonLabel(){
    if (this.state.selectedTeam){
      return "Hide Teams"
    } else {
      return "Show Teams"
    }
  }

  teamHandleClick(){
    if (this.state.selectedTeam){
      this.setState({selectedTeam: false})
    } else {
      this.setState({selectedTeam: true})
    }
  }

  runnerButtonLabel(){
    if (this.state.showRunners){
      return "Hide Runners"
    } else {
      return "Show Runners"
    }
  }

  runnerHandleClick(){
    if (this.state.showRunners){
      this.setState({showRunners: false})
    } else {
      this.setState({showRunners: true})
    }
  }

  joinTeam(){
      <h4>Want to join a team?</h4>
      let teams = this.state.race.teams.map((team) =>{
        return(
          <option key={team.id} value={team.name}>{team.name}</option>
        )
      });
      teams.push("I'm running solo");

      return(
        <select>
          {teams}
        </select>
    )
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
              <button className='display-teams' onClick={this.teamHandleClick} >{this.teamButtonLabel()}</button>
              <button className='display-runners' onClick={this.runnerHandleClick} >{this.runnerButtonLabel()}</button>
              {this.selectedTeam()}
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
