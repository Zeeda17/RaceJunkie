import React from 'react';
import { Link } from 'react-router';

const TeamTile = props => {

  let handleClick = () => {
    props.teamSelectClick(props.team.id)
  }

  return(
    <div className='team-tile' onClick={handleClick} >
      <h2><Link to={`/teams/${props.team.id}`}>{props.team.name}</Link></h2>
    </div>
  )
}

export default TeamTile;
