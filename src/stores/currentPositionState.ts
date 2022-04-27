import { atom, DefaultValue, selector, useRecoilState } from 'recoil';
import { RecoilAtomKeys, RecoilSelectorKeys } from './RecoilKeys';

type CurrentPosition = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type IsMovingMap = boolean;

// Atom
const latitudeState = atom<number>({
  key: 'latitude',
  default: 35.7022589,
});

const longitudeState = atom<number>({
  key: 'longitude',
  default: 139.7744733,
});

const zoomState = atom<number>({
  key: 'zoom',
  default: 12,
});

const isMovingMapState = atom<IsMovingMap>({
  key: RecoilAtomKeys.IS_MOVING_MAP_STATE,
  default: false,
});

// Selector
const mapViewState = selector<CurrentPosition>({
  key: RecoilSelectorKeys.VIEW_STATE,
  get: ({ get }) => {
    const view = {
      latitude: get(latitudeState),
      longitude: get(longitudeState),
      zoom: get(zoomState),
    };
    return view;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    set(latitudeState, newValue.latitude);
    set(longitudeState, newValue.longitude);
    set(zoomState, newValue.zoom);
  },
});

// custom hooks
export const useReactMapState = () => {
  const [viewState, setViewState] = useRecoilState(mapViewState);
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
