import React from 'react'
import './TrackList.css';
import Track from './Components/Track/Track'

class TrackList extends React.Component {
  render () {
    return (
      <div className="TrackList">
      {
        <this.props.tracks.map(theTrack => {
          return <Track key={track.id} track = {Track} />;
        })
      }
      </div>
    )
  }
}
this.props.track.name
this.props.track.artist
this.props.track.album
export default TrackList;
