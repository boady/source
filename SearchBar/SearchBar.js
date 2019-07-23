import React from 'react';
import './SearchBar.css';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <button className="SearchButton">SEARCH</button>
</div>
    )
  }
};
