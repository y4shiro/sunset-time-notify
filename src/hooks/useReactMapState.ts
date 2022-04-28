import { useRecoilState } from 'recoil';
import { isMovingMapState, mapViewSelector } from '../stores/currentPositionState';

export const useReactMapState = () => {
  const [viewState, setViewState] = useRecoilState(mapViewSelector);
  const [isMovingMap, setIsMovingMap] = useRecoilState(isMovingMapState);

  const setIsMovingMapToTrue = () => setIsMovingMap(true);
  const setIsMovingMapToFalse = () => setIsMovingMap(false);

  return {
    viewState,
    setViewState,
    isMovingMap,
    setIsMovingMapToTrue,
    setIsMovingMapToFalse,
  };
};
