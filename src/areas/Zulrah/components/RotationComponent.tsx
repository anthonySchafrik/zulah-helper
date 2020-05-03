import React, { useState } from 'react';

import { rotations } from '../utils';

interface Props {
  currentRotation: number;
}

const RotationComponent = ({ currentRotation }: Props) => {
  const [fullRotationToggle, setFullRotationToggle] = useState(false);

  const handleToggle = () => setFullRotationToggle(!fullRotationToggle);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ cursor: 'pointer' }} onClick={handleToggle}>
        Current Rotation is {currentRotation}
      </h2>
      <div
        onClick={handleToggle}
        style={{ display: fullRotationToggle ? 'none' : 'block' }}
      >
        <img src={rotations[currentRotation]} alt="current rotation" />
      </div>
    </div>
  );
};

export default RotationComponent;
