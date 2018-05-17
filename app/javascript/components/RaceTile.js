import React from 'react';
import { Link } from 'react-router';

const RaceTile = props => {

  return (
    <Link to={`/races/${props.race.id}`}>
      <div className='race-tile'>
        <h2 className='white-font' >{props.race.name} - {props.race.distance}</h2>
        <h4 className='goldish-font'>${props.race.price}</h4>
      </div>
    </Link>
  )
}

export default RaceTile;
