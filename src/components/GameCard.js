import React from 'react';

// pass props 
export default class GameCard extends React.Component {
  render() {
    return (
      <div classname="game-card">
      {/* Props Needed:
          NAME
          GAME TYPE
          PLAYS
           */}
        <h1 className="game-title">{this.props.name}</h1>

      </div>
    )
  }
}
