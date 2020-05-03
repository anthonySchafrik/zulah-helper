import React, { useReducer, useEffect } from 'react';

import { phases } from '../utils';

interface Props {
  currentPhase: number;
  currentRotation: number;
  handlePhaseChange: (key: string, mathType: string) => void;
  handleRotationChange: (rotation: number, reset?: boolean) => void;
  shouldRest: boolean;
}

interface State {
  [key: string]: any;
  img2?: boolean;
  img3?: boolean;
  img4?: boolean;
}

const initialState: State = {
  img2: false,
  img3: false,
  img4: false,
};

interface Action {
  type: string;
  payload?: State;
}

const UPDATE_ACTION = 'UPDATE_ACTION';
const RESET = 'RESET';

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_ACTION:
      return {
        ...state,
        ...payload,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

const PhaseContainer = ({
  currentPhase,
  currentRotation,
  handlePhaseChange,
  handleRotationChange,
  shouldRest,
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { img2, img3, img4 } = state;

  useEffect(() => {
    if (currentRotation === 1 && currentPhase === 4) {
      dispatch({
        type: UPDATE_ACTION,
        payload: { img2: true, img3: false, img4: false },
      });
    }
  }, [currentPhase, currentRotation]);

  useEffect(() => {
    if (shouldRest) {
      dispatch({
        type: RESET,
      });
    }
  }, [shouldRest]);

  const rotationKey = `r${currentRotation}`;
  const totalPhases = Object.keys(phases[rotationKey]).length;

  const handlePhaseUpdate = (key: string, mathType: string) => () => {
    if (mathType === 'mines' && currentPhase - 1 === 1) {
      dispatch({
        type: UPDATE_ACTION,
        payload: { img2: false, img3: false, img4: false },
      });
    }

    if (currentPhase === 1) {
      dispatch({ type: UPDATE_ACTION, payload: { img3: true, img4: true } });
    }

    handlePhaseChange(key, mathType);
  };

  const handleUpdateRotation = (rotation: number, reset?: boolean) => () => {
    handlePhaseFilter(rotation);
    handleRotationChange(rotation, reset);
  };

  const handlePhaseFilter = (imgNumber: number) => {
    if (currentPhase === 2) {
      if (imgNumber === 1) {
        dispatch({
          type: UPDATE_ACTION,
          payload: { img2: false, img3: false, img4: false },
        });
      }
    }

    if (currentPhase === 4) {
      dispatch({
        type: UPDATE_ACTION,
        payload: { img2: false, img3: false, img4: false },
      });
    }
  };

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

        {img2 && (
          <img
            onClick={handleUpdateRotation(2)}
            src={phases[`r${2}`][currentPhase]}
            alt="Current Phase"
          />
        )}

        {img3 && (
          <img
            onClick={handleUpdateRotation(3)}
            src={phases[`r${3}`][currentPhase]}
            alt="Current Phase"
          />
        )}

        {img4 && (
          <img
            onClick={handleUpdateRotation(4)}
            src={phases[`r${4}`][currentPhase]}
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
        {totalPhases === currentPhase && (
          <button onClick={handleUpdateRotation(1, true)}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default PhaseContainer;
