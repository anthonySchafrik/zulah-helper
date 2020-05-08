import React from 'react';

import { combat } from '../utils';

interface Props {
  currentPhase: number;
  currentRotation: number;
}

const CombatViewer = ({ currentPhase, currentRotation }: Props) => {
  const rotationKey = `r${currentRotation}`;
  const totalPhase = Object.keys(combat[rotationKey]).length;
  const lastPhase = currentPhase === totalPhase ? true : false;
  const nextPhase = lastPhase ? 1 : currentPhase + 1;

  const { gear: currentGear, pray: currentPray } = combat[rotationKey][
    currentPhase
  ];
  const { gear: nextGear, pray: nextPray } = combat[rotationKey][nextPhase];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'inherit',
          justifyContent: 'space-between',
          width: '15%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inherit',
              alignContent: 'center',
              flexDirection: 'column',
            }}
          >
            <p>Current Pray</p>
            <img
              style={{ alignSelf: 'center' }}
              src={currentPray}
              alt="prayIcon"
              height={40}
              width={40}
            />
          </div>
          <div
            style={{
              display: 'inherit',
              alignContent: 'center',
              flexDirection: 'column',
            }}
          >
            <p> Current gear</p>
            <img
              style={{ alignSelf: 'center' }}
              src={currentGear}
              alt="gearIcon"
              height={40}
              width={40}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inherit',
              alignContent: 'center',
              flexDirection: 'column',
            }}
          >
            <p>Next Pray</p>
            <img
              style={{ alignSelf: 'center' }}
              src={nextPray}
              alt="prayIcon"
              height={40}
              width={40}
            />
          </div>
          <div
            style={{
              display: 'inherit',
              alignContent: 'center',
              flexDirection: 'column',
            }}
          >
            <p> Next gear</p>
            <img
              style={{ alignSelf: 'center' }}
              src={nextGear}
              alt="gearIcon"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatViewer;
