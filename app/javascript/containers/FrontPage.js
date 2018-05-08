import React, {Component} from 'react';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/races`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ races: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  raceChecker(){
    if (this.state.races[0]) {
      return this.state.races[0].name
    } else {
      return null;
    }
  }

  render(){
    // debugger
    let race1 = this.state.races[0]

    return(
      <div>
        <p>{this.raceChecker()}</p>
      </div>
    )
  }


}

export default FrontPage;
