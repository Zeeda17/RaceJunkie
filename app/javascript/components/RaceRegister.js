import React from 'react';
import { Link } from 'react-router';

const RaceRegister = props => {
  return (
    <div >
      <button className='RaceRegister' onClick={props.handleRegistrationSubmit} >RUN!</button>
    </div>
  )
}

export default RaceRegister;
