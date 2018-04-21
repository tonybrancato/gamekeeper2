import React from 'react';
import './rating.css';

export default class Rating extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      hover: false,
      wasClicked: false,
      hoverVal:0
    }
  }

  onMouseEnter = (hoverVal) => {
    console.log(hoverVal);
    this.setState({
      hoverVal: hoverVal
    })
  }
  onMouseLeave = (e) => {
    this.setState({
      hover: false
    })
  }
  onClick = (hover, wasClicked) => {
    this.setState({
      hover: !hover,
      wasClicked: !wasClicked
    })
  }

  // change state of component based on hover

  render() {
    return (
      <div className='rating'>
        <img onMouseEnter={()=>this.onMouseEnter(1)} className={(this.state.hoverVal > 0) ? 'die die-select' : 'die'} alt='six sided die, one face' src={ require('../imgs/dice-six-faces-one.svg') } />
        <img onMouseEnter={()=>this.onMouseEnter(2)} className={(this.state.hoverVal > 1) ? 'die die-select' : 'die'} alt='six sided die, two face' src={ require('../imgs/dice-six-faces-two.svg') } />
        <img onMouseEnter={()=>this.onMouseEnter(3)} className={(this.state.hoverVal > 2) ? 'die die-select' : 'die'} alt='six sided die, three face' src={ require('../imgs/dice-six-faces-three.svg') } />
        <img onMouseEnter={()=>this.onMouseEnter(4)} className={(this.state.hoverVal > 3) ? 'die die-select' : 'die'} alt='six sided die, four face' src={ require('../imgs/dice-six-faces-four.svg') } />
        <img onMouseEnter={()=>this.onMouseEnter(5)} className={(this.state.hoverVal > 4) ? 'die die-select' : 'die'} alt='six sided die, five face' src={ require('../imgs/dice-six-faces-five.svg') } />
        <img onMouseEnter={()=>this.onMouseEnter(6)} className={(this.state.hoverVal > 5) ? 'die die-select' : 'die'} alt='six sided die, six face' src={ require('../imgs/dice-six-faces-six.svg') } />
      </div>
    )
  }
}