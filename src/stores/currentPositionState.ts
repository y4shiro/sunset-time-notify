import { atom } from 'recoil';
import { RecoilAtomKeys } from './RecoilKeys';

type CurrentPosition = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type IsMovingMap = boolean;

export const currentPositionState = atom<CurrentPosition>({
  key: RecoilAtomKeys.CURRENT_POSITION_STATE,
  default: {
    latitude: 35.7022589,
    longitude: 139.7744733,
    zoom: 12,
  },
});

export const isMovingMapState = atom<IsMovingMap>({
  key: RecoilAtomKeys.IS_MOVING_MAP_STATE,
  default: false,
});
