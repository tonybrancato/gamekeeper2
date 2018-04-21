import React from 'react';
import './gamecard.css';
import Rating from './rating'

// pass props 
export default class GameCard extends React.Component {
  render() {
    return (
      <div className="game-card">
        <h1 className="game-title">{this.props.name}</h1>
        <h2>{this.props.type}</h2>
        <h3>{this.props.type}</h3>
        <h3>{this.props.players} players</h3>
        <Rating />
      </div>
    )
  }
}
