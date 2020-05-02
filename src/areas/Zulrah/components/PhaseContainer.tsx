import React from 'react';

import { phases } from '../utils';

interface Props {
  currentPhase: number;
  currentRotation: number;
  handlePhaseChange: (key: string, mathType: string) => void;
}

const PhaseContainer = ({
  currentPhase,
  currentRotation,
  handlePhaseChange,
}: Props) => {
  const rotationKey = `r${currentRotation}`;

  const totalPhases = Object.keys(phases[rotationKey]).length;

  return (
    <div>
      Current Phase {currentPhase}
      <div>
        <img src={phases[rotationKey][currentPhase]} alt="Current Phase" />
      </div>
      <div>
        <button
          disabled={currentPhase === 1 ? true : false}
          onClick={() => handlePhaseChange('currentPhase', 'mines')}
        >
          {'<='}
        </button>
        <button
          disabled={totalPhases === currentPhase ? true : false}
          onClick={() => handlePhaseChange('currentPhase', 'add')}
        >
          {'=>'}
        </button>
      </div>
    </div>
  );
};

export default PhaseContainer;
