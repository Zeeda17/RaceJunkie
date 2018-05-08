import React from 'react';

const RaceTile = props => {

  return (
    <div className='race-tile'>
      <h2>{props.race.name} - {props.race.distance}</h2>
      <h4>${props.race.price}</h4>
    </div>
  )
}

export default RaceTile;
