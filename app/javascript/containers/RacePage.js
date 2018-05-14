import React, {Component} from 'react';
import RaceTile from '../components/RaceTile'
import RaceRegister from '../components/RaceRegister'
import TeamTile from '../components/TeamTile'
import NewTeamForm from '../components/NewTeamForm'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {},
      selectedTeam: false,
      joinTeam: '0',
      showRunners: false,
      register: false,
      newTeamName: '',
      newTeamMotto: ''
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
    this.selectedTeam = this.selectedTeam.bind(this)
    this.teamHandleClick = this.teamHandleClick.bind(this)
    this.teamButtonLabel = this.teamButtonLabel.bind(this)
    this.runnerHandleClick = this.runnerHandleClick.bind(this)
    this.runnerButtonLabel = this.runnerButtonLabel.bind(this)
    this.registerButtonTitle = this.registerButtonTitle.bind(this)
    this.registerHandleClick = this.registerHandleClick.bind(this)
    this.joinTeam = this.joinTeam.bind(this)
    this.teamSelect = this.teamSelect.bind(this)
    this.newTeamSubmit = this.newTeamSubmit.bind(this)
    this.newTeamNameChange = this.newTeamNameChange.bind(this)
    this.newTeamMottoChange = this.newTeamMottoChange.bind(this)
    this.showNewTeamForm = this.showNewTeamForm.bind(this)
    this.registerButtonLabel = this.registerButtonLabel.bind(this)
  }

  handleRegistrationSubmit(){
    let payload =  {joinTeam: this.state.joinTeam}

    fetch(`/api/v1/races/${this.props.params.id}/registrations`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => console.log(response))
  }

  selectedTeam(){
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

  registerHandleClick(){
    if (this.state.register === false){
      this.setState({register: true})
    } else if (this.state.joinTeam == 'newTeam') {
      this.newTeamSubmit()
    } else {
      this.handleRegistrationSubmit()
    }
  }

  newTeamSubmit(event){
    // event.preventDefault()
    let payload =  {
      newTeamName: this.state.newTeamName,
      newTeamMotto: this.state.newTeamMotto
    }

    fetch(`/api/v1/races/${this.props.params.id}/teams`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => console.log(response))
    .then(response => response.json())
    .then(body => {
      this.setState({
        race: this.state.race.teams.concat(body),
        joinTeam: '0',
        register: false,
        newTeamName: '',
        newTeamMotto: ''
      })
    })
  }

  newTeamNameChange(event){
    event.preventDefault()
    this.setState({newTeamName: event.target.value})
  }

  newTeamMottoChange(event){
    event.preventDefault()
    this.setState({newTeamMotto: event.target.value})
  }

  newTeamMottoChange

  registerButtonTitle(){
    if (this.state.register == false){
      return "Ready to run?"
    } else if (this.state.joinTeam == 'newTeam') {
      return ('Make your team')
    } else {
      return "Want to join a team?"
    }
  }

  teamSelect(event){
    let teamID = event.target.value
    this.setState({joinTeam: teamID});
  }

  joinTeam(){
    if (this.state.register) {
      if (this.state.race.teams != null) {
        let teams = this.state.race.teams.map((team) =>{
          return(
            <option key={team.id} value={team.id}>{team.name}</option>
          )
        });
        teams.unshift(<option key='0' value="0">-I'm running solo</option>);
        teams.push(<option key='newTeam' value="newTeam">-I want to make a new team</option>);

        return(
          <div className='join-team'>
            <select onChange={this.teamSelect}>
              {teams}
            </select>
          </div>
        )
      }
    } else {
      return null;
    }
  }

  showNewTeamForm(){
    if (this.state.joinTeam == 'newTeam') {
      return(
        <NewTeamForm
          newTeamSubmit={this.newTeamSubmit}
          newTeamNameChange={this.newTeamNameChange}
          newTeamMottoChange={this.newTeamMottoChange}
        />
      )
    }
  }

  registerButtonLabel(){
    if (this.state.register == false) {
      return('YES!')
    } else if (this.state.joinTeam == 'newTeam') {
      return('Create Team!')
    } else {
      return('Join Team!')
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
              <button className='display-teams' onClick={this.teamHandleClick} >{this.teamButtonLabel()}</button>
              <button className='display-runners' onClick={this.runnerHandleClick} >{this.runnerButtonLabel()}</button>
              {this.selectedTeam()}
            </div>
          </div>
        </div>

        <div className="columns small-4 medium-5" id="right">
          <div className="map-registration">
            <RaceRegister
              race={this.state.race}
              registerButtonLabel={this.registerButtonLabel}
              showNewTeamForm={this.showNewTeamForm}
              registerHandleClick={this.registerHandleClick}
              registerButtonTitle={this.registerButtonTitle}
              joinTeam={this.joinTeam}
              handleRegistrationSubmit={this.handleRegistrationSubmit}
            />
          </div>
        </div>
      </div>
    )}
}

export default RacePage;
