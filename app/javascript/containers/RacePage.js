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
      showTeamsButton: false,
      joinTeamForm: false,
      joinTeamSelected: null,
      newTeamRegister: false,
      newTeamName: '',
      newTeamMotto: '',
      searchInput: '',
      showSignUpButton: true,
      showJoinTeamButton: false,
      showNewTeamButton: false,
      showExistingTeamButton: false
    }
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    this.showTeamsButton = this.showTeamsButton.bind(this);
    this.teamHandleClick = this.teamHandleClick.bind(this);
    this.showTeamButtonLabel = this.showTeamButtonLabel.bind(this);
    this.joinTeamForm = this.joinTeamForm.bind(this);
    this.teamSelect = this.teamSelect.bind(this);
    this.newTeamSubmit = this.newTeamSubmit.bind(this);
    this.newTeamNameChange = this.newTeamNameChange.bind(this);
    this.newTeamMottoChange = this.newTeamMottoChange.bind(this);

    this.showExistingTeamButton = this.showExistingTeamButton.bind(this);
    this.showNewTeamForm = this.showNewTeamForm.bind(this);
    this.showSignUpButton = this.showSignUpButton.bind(this);
    this.showJoinTeamButton = this.showJoinTeamButton.bind(this);
    this.showNewTeamButton = this.showNewTeamButton.bind(this);
    this.showRunSoloButton = this.showRunSoloButton.bind(this);
    this.displayRegisterText = this.displayRegisterText.bind(this);

    this.handleBeginSignUp = this.handleBeginSignUp.bind(this);
    this.handleFindTeam = this.handleFindTeam.bind(this);

    this.teamRegister = this.teamRegister.bind(this);
    this.newTeamRegister = this.newTeamRegister.bind(this);

    this.searchResults = this.searchResults.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  handleRegistrationSubmit(){
    let payload =  {
      joinTeam: this.state.joinTeamSelected,
      old_team: this.state.race.currentUserTeam
    }

    //debugger
    fetch(`/api/v1/races/${this.props.params.id}/registrations`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => console.log(response))
    //.then(window.location.reload())
  }

  displayRegisterText(){
    var newSignUpText = 'Sign up?';
    var joinTeamText = 'Which team do you want to join?'
    var createTeamText = 'Make a new team!'
    var runSoloOrTeam = 'How would you like to run?'

    if (this.state.joinTeamForm) {
      return(joinTeamText)
    } else if (this.state.showRunSoloButton) {
      return(runSoloOrTeam)
    } else if (this.state.showSignUpButton) {
      return(newSignUpText)
    } else if (this.state.newTeamRegister) {
      return(createTeamText)
    }
  }

  showTeamsButton(){
    if (this.state.race.users_in_team == null) {
      return null;
    } else if (this.state.showTeamsButton) {
        const allTeams = this.state.race.users_in_team.map((team) =>{
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

  showTeamButtonLabel(){
    if (this.state.showTeamsButton){
      return "Hide Teams"
    } else {
      return "Show Teams"
    }
  }

  teamHandleClick(){
    if (this.state.showTeamsButton){
      this.setState({showTeamsButton: false})
    } else {
      this.setState({showTeamsButton: true})
    }
  }

  newTeamSubmit(){
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
        joinTeamSelected: null,
        newTeamName: '',
        newTeamMotto: ''
      })
    })
    .then(window.location.reload())
  }

  newTeamNameChange(event){
    this.setState({newTeamName: event.target.value})
  }

  newTeamMottoChange(event){
    this.setState({newTeamMotto: event.target.value})
  }

  teamSelect(event){
    let teamID = event.target.value
    this.setState({joinTeamSelected: teamID});
  }

  showRunSoloButton(){
    if (this.state.showRunSoloButton) {
      this.setState({showSignUpButton: false})
      return(
        <button className='RaceRegister rows small-4 register-buttons' onClick={this.handleRegistrationSubmit} >Run Solo</button>
      )
    }
  }

  showNewTeamButton(){
    if (this.state.showNewTeamButton) {
      this.setState({showSignUpButton: false})
      return(
        <button className='RaceRegister rows small-4 register-buttons' onClick={this.newTeamRegister} >Create New Team</button>
      )
    }
  }

  showJoinTeamButton(){
    if (this.state.showJoinTeamButton) {
      this.setState({showSignUpButton: false})
      return(
        <button className='RaceRegister rows small-4 register-buttons' onClick={this.teamRegister} >Join a Team</button>
      )
    }
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

  joinTeamForm(){
    if (this.state.joinTeamForm) {
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

  handleBeginSignUp(){
    this.setState({
      showSignUpButton: false,
      showJoinTeamButton: true,
      showRunSoloButton: true,
    })
  }

  showSignUpButton(){
    if (this.state.showSignUpButton) {
      return(
        <button className='RaceRegister rows small-4 register-buttons' onClick={this.handleBeginSignUp} >Sign up!</button>
      )
    } else {
      //return()
    }
  }

  handleFindTeam(){
    this.setState({
      showSignUpButton: false,
      showJoinTeamButton: true,
      showRunSoloButton: false,
    })
  }

  showExistingTeamButton(){
    if (this.state.showExistingTeamButton) {
      return(
        <button className='RaceRegister rows small-4 register-buttons' onClick={this.handleFindTeam} >Find a team</button>
      )
    } else {
      //return()
    }
  }

  teamRegister(){
    if (this.state.joinTeamForm === false) {
      this.setState({
        joinTeamForm: true,//this.state.race.users_in_team[0].id,
        newTeamRegister: false,
        showSignUpButton: false
      });
    } else if (this.state.joinTeamForm) {
      this.handleRegistrationSubmit();
    } else {

    }
  }

  newTeamRegister(){
    if (this.state.newTeamRegister == false) {
      this.setState({
        newTeamRegister: true,
        joinTeamSelected: null,
        joinTeamForm: false,
        showSignUpButton: false
      })
    } else if (this.state.newTeamName != '') {
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
            <p key={result.id}><Link to={`/teams/${result.id}`}>{result.name}</Link></p>
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
              <button className='display-teams' onClick={this.teamHandleClick} >{this.showTeamButtonLabel()}</button>
              {this.showTeamsButton()}
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
              joinTeamForm={this.joinTeamForm}
              showSignUpButton={this.showSignUpButton}
              displayRegisterText={this.displayRegisterText}
              showJoinTeamButton={this.showJoinTeamButton}
              showNewTeamButton={this.showNewTeamButton}
              showRunSoloButton={this.showRunSoloButton}
              handleBeginSignUp={this.handleBeginSignUp}
              showExistingTeamButton={this.showExistingTeamButton}
              handleFindTeam={this.handleFindTeam}
            />
          </div>
        </div>
      </div>
    )}
}

export default RacePage;
