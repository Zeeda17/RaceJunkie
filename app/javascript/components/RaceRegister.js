import React from 'react';

const RaceRegister = props => {
  return (
    <div>
      <div className='ready columns'><h4>{props.registerButtonLabel()}</h4></div>
      {props.joinTeam()}
      <button className='RaceRegister columns' onClick={props.registerHandleClick} >YES!</button>
      <img width="400" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=-------KEY_GOES_HERE-------" alt="Directions"/>
    </div>
  )
}

export default RaceRegister;
