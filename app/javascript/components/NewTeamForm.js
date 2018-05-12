import React from 'react';

const NewTeamForm = props => {
  console.log("NewTeamForm")
  return(
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Motto:
        <input type="text" name="motto" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewTeamForm;
