import React, { Component } from 'react';
import PhaseContainer from './components/PhaseContainer';
import RotationComponent from './components/RotationComponent';

class Zulrah extends Component {
  state = {
    currentPhase: 1,
    currentRotation: 1,
  };

  render = () => {
    const { currentPhase, currentRotation } = this.state;
    return (
      <div>
        <h3>This is the Zulrah container </h3>
        <RotationComponent currentRotation={currentRotation} />
        <PhaseContainer
          currentPhase={currentPhase}
          currentRotation={currentRotation}
        />
      </div>
    );
  };
}

export default Zulrah;
