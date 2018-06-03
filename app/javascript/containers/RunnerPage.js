import React, {Component} from 'react';

class RunnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runner: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/runners/${this.props.params.id}.json`, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'})
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
      this.setState({
        runner: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div>
        <p>HELLLLLOOO!</p>
      </div>
    )
  }
}

export default RunnerPage;
