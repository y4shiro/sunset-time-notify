import { atom } from 'recoil';
import { RecoilAtomKeys } from './RecoilKeys';

// Atom
export const sunriseTimeState = atom<string>({
  key: RecoilAtomKeys.SUNRISE_TIME_STATE,
  default: '',
});

export const sunsetTimeState = atom<string>({
  key: RecoilAtomKeys.SUNSET_TIME_STATE,
  default: '',
});

export const suntimeIsvalidState = atom<boolean>({
  key: RecoilAtomKeys.SUNTIME_ISVALID_STATE,
  default: false,
});
