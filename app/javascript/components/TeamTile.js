import React from 'react';

const TeamTile = props => {

  return(
    <div className='team-tile'>
      <h2>{props.team.name}</h2>
      <h4>{props.team.motto}</h4>
    </div>
  )
}

export default TeamTile;
