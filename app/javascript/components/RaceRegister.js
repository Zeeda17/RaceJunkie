import React from 'react';

const RaceRegister = props => {
  let map = null;
  let directions = null;
  if (typeof props.race.city !== 'undefined') {
    map = `https://maps.googleapis.com/maps/api/staticmap?center=${props.race.street},${props.race.city},${props.race.state}&zoom=16&size=400x400&markers=color:red%7C${props.race.street},${props.race.city},${props.race.state}&key=AIzaSyDKXWUi5QTlNwpafPbvqtGKNl7APMk0atE`

    directions = `https://www.google.com/maps/dir//${props.race.street},${props.race.city},${props.race.state}`
  }

  return (
    <div>
      <div className='ready columns'><h4>Want to join a team?</h4></div>
      {props.joinTeam()}
      {props.showNewTeamForm()}
      <div className='row' id='register-buttons-row'>
        <button className='RaceRegister columns small-4 register-buttons' onClick={props.handleRegistrationSubmit} >Run Solo</button>
        <button className='RaceRegister columns small-4 register-buttons' onClick={props.teamRegister} >Join a Team</button>
        <button className='RaceRegister columns small-4 register-buttons end' onClick={props.newTeamRegister} >New Team</button>
      </div>
      <a href={directions} target='_blank'>
        <img width="400" href={directions} src={map} alt="Directions"/>
      </a>
    </div>
  )
}

export default RaceRegister;
