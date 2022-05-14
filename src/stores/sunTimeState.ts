import { atom } from 'recoil';
import { RecoilAtomKeys } from './RecoilKeys';

// Atom
export const sunriseTimeState = atom<Date>({
  key: RecoilAtomKeys.SUNRISE_TIME_STATE,
  default: new Date(),
});

export const sunsetTimeState = atom<Date>({
  key: RecoilAtomKeys.SUNSET_TIME_STATE,
  default: new Date(),
});

export const suntimeIsvalidState = atom<boolean>({
  key: RecoilAtomKeys.SUNTIME_ISVALID_STATE,
  default: false,
});
