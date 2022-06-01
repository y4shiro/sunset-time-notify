import { useRecoilCallback } from 'recoil';
import { currentPlaceNameState } from '../stores/currentPlaceNameState';

export const useAsyncCurrentPlaceName = () => {
  const getCurrentPlaceName = useRecoilCallback(({ snapshot }) => async () => {
    const placeName = await snapshot.getPromise(currentPlaceNameState);
    return placeName;
  });

  return { getCurrentPlaceName };
};
