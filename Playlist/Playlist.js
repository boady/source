import React from 'react';
import './Playlist.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import TrackList from '../TrackList/TrackList'

export class Playlist extends React.Component {
  render() {
    return (<div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
    )
  }
};
