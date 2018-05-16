import React, {Component} from 'react';
import { Link } from 'react-router';
import RaceTile from '../components/RaceTile'
import SearchBar from '../components/SearchBar'

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      featuredRace: [],
      searchInput: ''
    };
    this.raceChecker = this.raceChecker.bind(this);
    this.featuredRace = this.featuredRace.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.searchResults = this.searchResults.bind(this);
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
      let featuredHolder = body.splice(Math.floor(Math.random()*body.length), 1)
      this.setState({
        races: body,
        featuredRace: featuredHolder[0]
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  featuredRace(){
    if (this.state.featuredRace.length != 0) {

        return(
          <div className='featured-race'>
            <RaceTile
              race={this.state.featuredRace}
            />
          </div>
        )
    } else {
      return null;
    }
  }

  raceChecker(){
    if (this.state.races.length != 0) {
      const allRaces = this.state.races.map((race) => {
        return(
          <div key={race.id} className='race-tile'>
            <RaceTile
              race={race}
            />
          </div>
        )
      })
      return(allRaces)
    } else {
      return null;
    }
  }

  searchChange(event){
    this.setState({searchInput: event.target.value})
  }

  searchResults(){
    const searchText = this.state.searchInput.toLowerCase();
    const featured = this.state.featuredRace;
    let finalOutput = null;
    let searchResults = [];
    if (searchText) {
      if (featured.name.toLowerCase().search(searchText) != -1) {
        searchResults.push(featured)
      }
      this.state.races.forEach((race) =>{
        if (race.name.toLowerCase().search(searchText) != -1) {
          searchResults.push(race)
        }
      })

      if (searchResults.length != 0) {
        finalOutput = searchResults.map((result) =>{
          return(
            <p key={result.id}><Link to={`/races/${result.id}`}>{result.name}</Link></p>
          )
        })
      }

      console.log(finalOutput);
    }
    return(
      <div className='search-results'>
        {finalOutput}
      </div>
    )
  }

  render(){

    return(
      <div>
        <SearchBar
          searchChange={this.searchChange}
          searchResults={this.searchResults}
        />
        <h1 className='featured-race-title'>Featured Race</h1>
        {this.featuredRace()}
        <h2 className='upcoming-races-title'>Upcoming Races</h2>
        {this.raceChecker()}
      </div>
    )
  }
}

export default FrontPage;
