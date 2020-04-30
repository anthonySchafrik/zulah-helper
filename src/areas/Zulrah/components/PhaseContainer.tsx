import React from 'react';

interface Props {
  currentPhase: number;
  currentRotation: number;
}

const PhaseContainer = ({ currentPhase, currentRotation }: Props) => {
  return <div>Current Phase {currentPhase}</div>;
};

export default PhaseContainer;
