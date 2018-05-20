import React from 'react';

const RaceHeadsUp = props => {

  const signedUp = () => {
    if (props.team) {
      return `You are in team ${props.team}`
    } else if (props.signedUp) {
      return 'You are signed up for this race.'
    } {
      return null
    }
  }

  return(
    <div className='user-race-status test-find'>
      <h7>{signedUp()}</h7><br/>
    </div>
  )
}

export default RaceHeadsUp;
