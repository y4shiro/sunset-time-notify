import { altitudeState } from './../stores/currentPositionState';
import { useRecoilState } from 'recoil';
import {
  altitudeSelector,
  isMovingMapState,
  mapViewSelector,
} from '../stores/currentPositionState';

export const useReactMapState = () => {
  const [viewState, setViewState] = useRecoilState(mapViewSelector);
  const [altitude, setAltitude] = useRecoilState(altitudeSelector);
  const [isMovingMap, setIsMovingMap] = useRecoilState(isMovingMapState);

  const setIsMovingMapToTrue = () => setIsMovingMap(true);
  const setIsMovingMapToFalse = () => setIsMovingMap(false);

  return {
    viewState,
    setViewState,
    altitude,
    setAltitude,
    isMovingMap,
    setIsMovingMapToTrue,
    setIsMovingMapToFalse,
  };
};
