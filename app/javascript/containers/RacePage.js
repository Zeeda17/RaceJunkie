import React, {Component} from 'react';
import { Link } from 'react-router';
import RaceTile from '../components/RaceTile'
import RaceRegister from '../components/RaceRegister'
import TeamTile from '../components/TeamTile'
import NewTeamForm from '../components/NewTeamForm'
import SearchBar from '../components/SearchBar'
import RaceHeadsUp from '../components/RaceHeadsUp'

class RacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: {},
      showTeams: false,
      selectedTeams: null,
      joinTeam: null,
      register: false,
      newTeamRegister: false,
      newTeamName: '',
      newTeamMotto: '',
      searchInput: ''
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
    this.showTeams = this.showTeams.bind(this)
    this.teamHandleClick = this.teamHandleClick.bind(this)
    this.teamButtonLabel = this.teamButtonLabel.bind(this)
    this.teamSelectClick = this.teamSelectClick.bind(this)
    this.registerButtonTitle = this.registerButtonTitle.bind(this)
    this.registerSoloHandleClick = this.registerSoloHandleClick.bind(this)
    this.joinTeam = this.joinTeam.bind(this)
    this.teamSelect = this.teamSelect.bind(this)
    this.newTeamSubmit = this.newTeamSubmit.bind(this)
    this.newTeamNameChange = this.newTeamNameChange.bind(this)
    this.newTeamMottoChange = this.newTeamMottoChange.bind(this)
    this.showNewTeamForm = this.showNewTeamForm.bind(this)

    this.teamRegister = this.teamRegister.bind(this)
    this.newTeamRegister = this.newTeamRegister.bind(this)

    this.searchResults = this.searchResults.bind(this)
    this.searchChange = this.searchChange.bind(this)
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

  showTeams(){
    if (this.state.race.users_in_team == null) {
      return null;
    } else if (this.state.showTeams) {
        const allTeams = this.state.race.users_in_team.map((team) =>{
          return(
            <div key={team.id}>
              <TeamTile
                teamSelectClick={this.teamSelectClick}
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
    fetch(`/api/v1/races/${this.props.params.id}.json`, {
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
        race: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  teamButtonLabel(){
    if (this.state.showTeams){
      return "Hide Teams"
    } else {
      return "Show Teams"
    }
  }

  teamHandleClick(){
    if (this.state.showTeams){
      this.setState({showTeams: false})
    } else {
      this.setState({showTeams: true})
    }
  }

  teamSelectClick(id){
    if (this.state.selectedTeams == id){
      this.setState({selectedTeams: null})
    } else {
      this.setState({selectedTeams: id})
    }
  }

  registerSoloHandleClick(){
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
    .then(body => {
      this.setState({
        joinTeam: null,
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

  showNewTeamForm(){
    if (this.state.newTeamRegister == true) {
      return(
        <NewTeamForm
          newTeamSubmit={this.newTeamSubmit}
          newTeamNameChange={this.newTeamNameChange}
          newTeamMottoChange={this.newTeamMottoChange}
        />
      )
    }
  }

  joinTeam(){
    if (this.state.joinTeam) {
      if (this.state.race.users_in_team != null) {
        let teams = this.state.race.users_in_team.map((team) =>{
          return(
            <option key={team.id} value={team.id}>{team.name}</option>
          )
        });

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

  teamRegister(){
    if (this.state.joinTeam == null) {
      this.setState({
        joinTeam: this.state.race.users_in_team[0].id,
        newTeamRegister: false
      });
    } else if (this.state.joinTeam) {
      this.handleRegistrationSubmit();
    } else {

    }
  }

  newTeamRegister(){
    if (this.state.newTeamRegister == false) {
      this.setState({
        newTeamRegister: true,
        joinTeam: null
      })
    } else if (this.state.newTeamName != '' && this.state.newTeamMotto != '') {
      this.newTeamSubmit()
    } else {

    }
  }

  searchChange(event){
    this.setState({searchInput: event.target.value})
  }

  searchResults(){
    const searchText = this.state.searchInput.toLowerCase();
    const currentTeams = this.state.race.users_in_team;
    let finalOutput = null;
    let searchResults = [];
    if (searchText) {
      currentTeams.forEach((race) =>{
        if (race.name.toLowerCase().search(searchText) != -1) {
          searchResults.push(race)
        }
      })

      if (searchResults.length != 0) {
        finalOutput = searchResults.map((result) =>{
          return(
            <p key={result.id}>{result.name}</p>
          )
        })
      }
    }
    return(
      <div className='search-results'>
        {finalOutput}
      </div>
    )
  }

  render(){
    return(
      <div>
        <div className='race-heads-up-box'>
          <RaceHeadsUp
            signedUp={this.state.race.currentUserRunning}
            team={this.state.race.currentUserTeam}
          />
        </div>
        <div className="columns small-8 medium-7" id="left">
          <div className="race-breakdown">
            <div className='race-breakdown-title'>
              <h2 className='white-font'>{this.state.race.name} - {this.state.race.distance}</h2>
              <h4 className='goldish-font'>${this.state.race.price}</h4>
            </div>
            <div className='race-breakdown-info'>
              <p>{this.state.race.description}</p>
              <button className='display-teams' onClick={this.teamHandleClick} >{this.teamButtonLabel()}</button>
              {this.showTeams()}
              <div id='search-bar-race-page'>
                <SearchBar
                  searchChange={this.searchChange}
                  searchResults={this.searchResults}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="columns small-4 medium-5" id="right">
          <div className="map-registration">
            <RaceRegister
              race={this.state.race}
              handleRegistrationSubmit={this.handleRegistrationSubmit}
              teamRegister={this.teamRegister}
              newTeamRegister={this.newTeamRegister}
              showNewTeamForm={this.showNewTeamForm}
              registerButtonTitle={this.registerButtonTitle}
              joinTeam={this.joinTeam}
            />
          </div>
        </div>
      </div>
    )}
}

export default RacePage;
