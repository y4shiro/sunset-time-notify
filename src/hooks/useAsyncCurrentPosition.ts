import { useRecoilCallback } from 'recoil';
import { altitudeState, latitudeState, longitudeState } from '../stores/currentPositionState';

export const useAsyncCurrentPosition = () => {
  const getPositionOnce = useRecoilCallback(({ snapshot }) => async () => {
    const latitude = await snapshot.getPromise(latitudeState);
    const longitude = await snapshot.getPromise(longitudeState);
    const altitude = await snapshot.getPromise(altitudeState);

    return {
      latitude,
      longitude,
      altitude,
    };
  });

  return { getPositionOnce };
};
