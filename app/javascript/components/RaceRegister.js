import React from 'react';

const RaceRegister = props => {
  // debugger
  const map = `https://maps.googleapis.com/maps/api/staticmap?center=${props.race.city},${props.race.state}&zoom=16&size=400x400&`

  return (
    <div>
      <div className='ready columns'><h4>{props.registerButtonTitle()}</h4></div>
      {props.joinTeam()}
      {props.showNewTeamForm()}
      <button className='RaceRegister columns' onClick={props.registerHandleClick} >{props.registerButtonLabel()}</button>
      <img width="400" src={map} alt="Directions"/>
    </div>
  )
}

export default RaceRegister;

//https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=-------KEY_GOES_HERE-------
//https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=13&size=400x400&
//markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=YOUR_API_KEY
//https://maps.googleapis.com/maps/api/staticmap?parameters
//https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=
