import React from 'react';

const RaceHeadsUp = props => {

  const signedUp = () => {
    if (props.team) {
      return(
        <div className='user-race-status'>
          <h7>{`You are in team ${props.team}`}</h7><br/>
        </div>
      )
    } else if (props.signedUp) {
      return(
        <div className='user-race-status'>
          <h7>You are signed up for this race.</h7><br/>
        </div>
      )
    } {
      return null
    }
  }

  return (signedUp())
}

export default RaceHeadsUp;
