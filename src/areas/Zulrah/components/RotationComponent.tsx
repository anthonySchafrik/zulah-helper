import React from 'react';

import r1 from '../../../assets/rotations/r1/r1f.png';
import r2 from '../../../assets/rotations/r2/r2f.png';
import r3 from '../../../assets/rotations/r3/r3f.png';
import r4 from '../../../assets/rotations/r4/r4f.png';

interface RotationObject {
  [key: string]: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

const rotations: RotationObject = {
  1: r1,
  2: r2,
  3: r3,
  4: r4,
};

interface Props {
  currentRotation: number;
}

const RotationComponent = ({ currentRotation }: Props) => {
  console.log(r1);
  return (
    <div>
      <h2>Current Rotation is {currentRotation}</h2>
      <img src={rotations[currentRotation]} alt="current rotation" />
    </div>
  );
};

export default RotationComponent;
