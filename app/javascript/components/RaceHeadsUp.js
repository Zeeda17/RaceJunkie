import React from 'react';

const RaceHeadsUp = props => {
  // debugger
  const signedUp = () => {
    if (props.signedUp) {
      return "YUP"
    } else {
      return 'NOPE'
    }
  }

  return(
    <div>
      <h7>You are in team: {props.team}</h7>
      <h7>You are running this race: {signedUp()}</h7>
    </div>
  )
}

export default RaceHeadsUp;
