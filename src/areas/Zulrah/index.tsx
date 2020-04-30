import React, { Component } from 'react';
import PhaseContainer from './components/PhaseContainer';
import RotationComponent from './components/RotationComponent';

class Zulrah extends Component {
  state = {
    currentPhase: 1,
    currentRotation: 1,
  };

  render = () => {
    return (
      <div>
        <h3>This is the Zulrah container </h3>
        <RotationComponent />
        <PhaseContainer />
      </div>
    );
  };
}

export default Zulrah;
