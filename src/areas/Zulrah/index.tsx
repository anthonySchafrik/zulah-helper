import React, { Component } from 'react';

import PhaseContainer from './components/PhaseContainer';
import RotationComponent from './components/RotationComponent';
import CombatViewer from './components/CombatViewer';

class Zulrah extends Component {
  state = {
    currentPhase: 1,
    currentRotation: 1,
    shouldRest: false,
  };

  handlePhaseChange = (key: string, mathType: string) => {
    let { currentPhase } = this.state;

    if (mathType === 'add') {
      this.setState({ [key]: currentPhase += 1 });
      return;
    }

    this.setState({ [key]: currentPhase -= 1 });
  };

  handleRotationChange = (rotation: number, reset?: boolean) => {
    if (reset) {
      this.setState({ currentRotation: 1, currentPhase: 1, shouldRest: true });
      return;
    }

    this.setState({ currentRotation: rotation });
  };

  render = () => {
    const { currentPhase, currentRotation, shouldRest } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '50% 30% 50%',
        }}
      >
        <RotationComponent currentRotation={currentRotation} />
        <CombatViewer
          currentPhase={currentPhase}
          currentRotation={currentRotation}
        />
        <PhaseContainer
          currentPhase={currentPhase}
          currentRotation={currentRotation}
          handlePhaseChange={this.handlePhaseChange}
          handleRotationChange={this.handleRotationChange}
          shouldRest={shouldRest}
        />
      </div>
    );
  };
}

export default Zulrah;
