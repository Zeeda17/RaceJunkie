import React from 'react';
import { Link } from 'react-router';
import RaceRegister from './RaceRegister';

const RaceTile = props => {

  return (
    <div className='race-tile'>
      <h2><Link to={`/races/${props.race.id}`}>{props.race.name}</Link> - {props.race.distance}</h2>
      <h4>${props.race.price}</h4>
    </div>
  )
}

export default RaceTile;
