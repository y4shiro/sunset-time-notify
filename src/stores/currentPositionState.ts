import { atom, DefaultValue, selector, useRecoilState } from 'recoil';
import { RecoilAtomKeys, RecoilSelectorKeys } from './RecoilKeys';

type MapView = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type IsMovingMap = boolean;

// Atom
export const latitudeState = atom<number>({
  key: RecoilAtomKeys.LATITUDE_STATE,
  default: 35.7022589,
});

export const longitudeState = atom<number>({
  key: RecoilAtomKeys.LONGITUDE_STATE,
  default: 139.7744733,
});

export const altitudeState = atom<number>({
  key: RecoilAtomKeys.ALTITUDE_STATE,
  default: 0,
});

const zoomState = atom<number>({
  key: RecoilAtomKeys.ZOOM_STATE,
  default: 12,
});

export const locationErrorState = atom<string>({
  key: RecoilAtomKeys.LOCATION_ERROR_STATE,
  default: '',
});

export const isMovingMapState = atom<IsMovingMap>({
  key: RecoilAtomKeys.IS_MOVING_MAP_STATE,
  default: false,
});

// Selector
export const mapViewSelector = selector<MapView>({
  key: RecoilSelectorKeys.MAP_VIEW,
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
