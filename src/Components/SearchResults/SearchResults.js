import React from 'react'
import './SearchResults.css';
import App from './Components/App/App';
import TrackList from './Components/TrackList/Tracklist';

class SearchResults extends React.component {
  constructor(props) {
    super(props);
    searchResults : 'this.state.searchResults'
  }
  render() {
    return (
      <div className="SearchResults">
      <h2>Results</h2>
      <TrackList/>
      </div>
    )
  }
}
export default SearchResults
