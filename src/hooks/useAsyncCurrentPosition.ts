import { useRecoilCallback } from 'recoil';
import { altitudeState, latitudeState, longitudeState } from '../stores/currentPositionState';

export const useAsyncCurrentPosition = () => {
  const getPositionOnce = useRecoilCallback(({ snapshot }) => async () => {
    const lat = await snapshot.getPromise(latitudeState);
    const lon = await snapshot.getPromise(longitudeState);
    const alt = await snapshot.getPromise(altitudeState);

    return {
      latitude: lat,
      longitude: lon,
      altitude: alt,
    };
  });

  return { getPositionOnce };
};
