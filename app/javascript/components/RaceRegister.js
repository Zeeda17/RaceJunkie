import React from 'react';
import { Link } from 'react-router';

const RaceRegister = props => {
  return (
    <div>
      <div className='ready columns'><h4>Ready to run?</h4></div>
      <button className='RaceRegister columns' onClick={props.handleRegistrationSubmit} >YES!</button>
    </div>
  )
}

export default RaceRegister;
