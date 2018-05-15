import React from 'react';

const RaceRegister = props => {
  const map = `https://maps.googleapis.com/maps/api/staticmap?center=${props.race.street},${props.race.city},${props.race.state}&zoom=16&size=400x400&markers=color:red%7C${props.race.street},${props.race.city},${props.race.state}`
  const directions = `https://www.google.com/maps/dir//${props.race.street},${props.race.city},${props.race.state}`
  return (
    <div>
      <div className='ready columns'><h4>{props.registerButtonTitle()}</h4></div>
      {props.joinTeam()}
      {props.showNewTeamForm()}
      <button className='RaceRegister columns' onClick={props.registerHandleClick} >{props.registerButtonLabel()}</button>
      <a href={directions} target='_blank'>
        <img width="400" href={directions} src={map} alt="Directions"/>
      </a>
    </div>
  )
}

export default RaceRegister;
