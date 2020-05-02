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

  const handlePhaseUpdate = (key: string, mathType: string) => () =>
    handlePhaseChange(key, mathType);

  const handleUpdateRotation = (rotation: number) => () =>
    console.log(rotation);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>Current Phase {currentPhase}</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '35%',
        }}
      >
        <img
          onClick={handleUpdateRotation(1)}
          src={phases[rotationKey][currentPhase]}
          alt="Current Phase"
        />

        {currentPhase !== 1 && currentPhase !== 2 && (
          <img
            onClick={handleUpdateRotation(2)}
            src={phases[rotationKey][currentPhase]}
            alt="Current Phase"
          />
        )}

        {currentPhase !== 1 && (
          <img
            onClick={handleUpdateRotation(3)}
            src={phases[rotationKey][currentPhase]}
            alt="Current Phase"
          />
        )}

        {currentPhase !== 1 && (
          <img
            onClick={handleUpdateRotation(4)}
            src={phases[rotationKey][currentPhase]}
            alt="Current Phase"
          />
        )}
      </div>
      <div>
        <button
          disabled={currentPhase === 1 ? true : false}
          onClick={handlePhaseUpdate('currentPhase', 'mines')}
        >
          {'<='}
        </button>
        <button
          disabled={totalPhases === currentPhase ? true : false}
          onClick={handlePhaseUpdate('currentPhase', 'add')}
        >
          {'=>'}
        </button>
      </div>
    </div>
  );
};

export default PhaseContainer;
