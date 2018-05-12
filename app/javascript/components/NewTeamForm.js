import React from 'react';

const NewTeamForm = props => {
  return(
    <form>
      <label>
        Team Name:
        <input type="text" name="name" onChange={props.newTeamNameChange} />
      </label>
      <label>
        Team Motto:
        <input type="text" name="motto" onChange={props.newTeamMottoChange} />
      </label>
    </form>
  )
}

export default NewTeamForm;
