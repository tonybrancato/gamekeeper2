import React from 'react';
import './landingpage.css';
import GameCard from './GameCard';

export class Games extends React.Component {
  render() {
    const games = (this.props.games).map((game, index) => {
      return (
        <div className="landing-page">

        {/* Info box containing explanation */}
        <div className="gamekeeper-intro">
        <GameCard 
          name="Splendor"
  
        />
        </div>
  
        {/* Boxes displaying the two GameKeepers */}
        <div className="gamekeeper-one">
  
        </div>
        <div className="gamekeeper-two">
        
        </div>
  
        {/* Footer with portfolio, github, and LinkedIn links */}
  
        </div>
      )

    })

  }
}