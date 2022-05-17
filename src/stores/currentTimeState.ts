import { atom } from 'recoil';
import { RecoilAtomKeys } from './RecoilKeys';

// Atom
export const currentTimeState = atom<Date>({
  key: RecoilAtomKeys.CURRENT_TIME_STATE,
  default: new Date(),
});
