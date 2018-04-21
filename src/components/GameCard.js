import React from 'react';
import './gamecard.css';
import Rating from './rating'

// pass props 
export default class GameCard extends React.Component {
  render() {
    const {name, type, players} = this.props;
    // console.log(this.props)
    // console.log('name', name, 'type',type,'players',players)
    return (
      <div className="game-card">
      <div className="game-text">
        <h1 className="game-title">{name}</h1>
        <h2>{type}</h2>
        <h3>{players} players</h3>
      </div>
        <Rating />
      </div>
    )
  }
}
