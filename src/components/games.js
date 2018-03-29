import React from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';

export class Games extends React.Component {
  render() {
    const allGames = (this.props.games).map((game, index) => {
      return (
        <div className="gamekeeper-intro">
          <GameCard 
            name={game.name}
          />  
        </div>
      );
    })
    return (
      allGames
    );
  }
}

const mapStateToProps = state => ({
  games: state.games.data
});

export default connect(mapStateToProps)(Games);