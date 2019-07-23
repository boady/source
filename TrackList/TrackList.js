import React from 'react';
import './TrackList.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist}  from '../Playlist/Playlist';
import {Track} from '../Track/Track'

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
      <Track/>
      </div>
    )
  }
};
