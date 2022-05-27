import { useRecoilValue } from 'recoil';
import { altitudeState, latitudeState, longitudeState } from '../stores/currentPositionState';

export const useCurrentPosition = () => {
  const latitude = useRecoilValue(latitudeState); // Latitude 緯度
  const longitude = useRecoilValue(longitudeState); // Longitude 経度
  const altitude = useRecoilValue(altitudeState); // Altitude 高度
  const isLoading = !latitude && !longitude;

  return { latitude, longitude, altitude, isLoading };
};
