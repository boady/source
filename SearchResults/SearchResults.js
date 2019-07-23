import React from 'react';
import './SearchResults.css';
import {SearchBar} from '../SearchBar/SearchBar'
import {Playlist} from '../Playlist/Playlist'
import {TrackList} from '../TrackList/TrackList'

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
      <h2>Results</h2>
      <TrackList/>
      </div>
    )
  }
};
