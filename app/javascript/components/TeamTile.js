import React from 'react';

const TeamTile = props => {

  let handleClick = () => {
    props.teamSelectClick(props.team.id)
  }

  return(
    <div className='team-tile' onClick={handleClick} >
      <h2>{props.team.name}</h2>
      <h4>{props.team.motto}</h4>
    </div>
  )
}

export default TeamTile;
