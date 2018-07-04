import React from 'react';
import { Link } from 'react-router';

const TeamTile = props => {

  return(
    <div className='team-tile'>
      <h2><Link to={`/teams/${props.team.id}`}>{props.team.name}</Link></h2>
    </div>
  )
}

export default TeamTile;
