import React from 'react'
import './Playlist.css';
import Tracklist from '../Tracklist/TrackList';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
      <input value="New Playlist"/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
// a <TrackList> componenet that we have not built yet should be between lines 9 and 10 but npm will not ignore the component even if it is commented out.
export default Playlist;
