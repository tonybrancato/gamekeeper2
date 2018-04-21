import React from 'react';
import './rating.css';

export default class Rating extends React.Component {
  render() {
    return (
      <div className='rating'>
        <img className='die' alt='six sided die, one face' src={ require('../imgs/dice-six-faces-one.svg') } />
        <img className='die' alt='six sided die, two face' src={ require('../imgs/dice-six-faces-two.svg') } />
        <img className='die' alt='six sided die, three face' src={ require('../imgs/dice-six-faces-three.svg') } />
        <img className='die' alt='six sided die, four face' src={ require('../imgs/dice-six-faces-four.svg') } />
        <img className='die' alt='six sided die, five face' src={ require('../imgs/dice-six-faces-five.svg') } />
        <img className='die' alt='six sided die, six face' src={ require('../imgs/dice-six-faces-six.svg') } />
      </div>
    )
  }
}