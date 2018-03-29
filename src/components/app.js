import React from 'react';

import Games from './games';


export default class App extends React.Component {
  render() {
    return (
      <div className="games">
        <Games />
      </div>
    );
  }
}