import React from 'react';
import './Track.css';
const isRemoval = true

export class Track extends React.Component {
  render() {
    return (<div class="Track">
    <div className="Track-information">
    <h3>trackName</h3>
    <p>Artist | album </p>
    </div>
    {isRemoval ? <button>-</button> :<button>+</button>}
    <button className="Track-action"></button>
    </div>
  )}}
