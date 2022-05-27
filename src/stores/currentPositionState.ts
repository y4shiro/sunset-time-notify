import { atom, DefaultValue, selector } from 'recoil';
import { RecoilAtomKeys, RecoilSelectorKeys } from './RecoilKeys';
import { DEFAULT_POSITION } from './../utils/constants';

type MapView = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type IsMovingMap = boolean;

// Atom
export const latitudeState = atom<number>({
  key: RecoilAtomKeys.LATITUDE_STATE,
  default: DEFAULT_POSITION.latitude,
});

export const longitudeState = atom<number>({
  key: RecoilAtomKeys.LONGITUDE_STATE,
  default: DEFAULT_POSITION.longitude,
});

export const altitudeState = atom<number>({
  key: RecoilAtomKeys.ALTITUDE_STATE,
  default: 0,
});

const zoomState = atom<number>({
  key: RecoilAtomKeys.ZOOM_STATE,
  default: 12,
});

export const isMovingMapState = atom<IsMovingMap>({
  key: RecoilAtomKeys.IS_MOVING_MAP_STATE,
  default: false,
});

// Selector
export const altitudeSelector = selector<number>({
  key: RecoilSelectorKeys.ALTITUDE_SELECTOR,
  get: ({ get }) => {
    const alt = get(altitudeState);
    return alt;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    set(altitudeState, newValue);
  },
});

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
