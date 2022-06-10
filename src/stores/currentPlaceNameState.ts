import { atom } from 'recoil';
import { RecoilAtomKeys } from './RecoilKeys';

// Atom
export const currentPlaceNameState = atom<string>({
  key: RecoilAtomKeys.CURRENT_PLACENAME_STATE,
  default: '',
});
