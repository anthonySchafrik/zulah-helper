import React from 'react';

import { phases } from '../utils';

interface Props {
  currentPhase: number;
  currentRotation: number;
}

const PhaseContainer = ({ currentPhase, currentRotation }: Props) => {
  const rotationKey = `r${currentRotation}`;

  return (
    <div>
      Current Phase {currentPhase}
      <div>
        <img src={phases[rotationKey][currentPhase]} alt="Current Phase" />
      </div>
      <div>
        <button>{'<='}</button>
        <button>{'=>'}</button>
      </div>
    </div>
  );
};

export default PhaseContainer;
