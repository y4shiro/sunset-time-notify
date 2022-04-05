import { useState, useEffect } from 'react';

export const useCurrentPosition = () => {
  const [lat, setLat] = useState(0); // Latitude 緯度
  const [lon, setLon] = useState(0); // Longitude 経度
  const [locationError, setLocationError] = useState('');
  const isLoading = !lat && !lon;

  const getCurrentPosition = () => {
    return new Promise(
      (
        resolve: (value: GeolocationPosition) => void,
        reject: (reason: GeolocationPositionError) => void,
      ) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      },
    );
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      const getPosition = async () => {
        try {
          const position = await getCurrentPosition();
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        } catch (err) {
          if (err instanceof GeolocationPositionError) {
            setLocationError(err.message);
          }
        }
      };

      getPosition();
    }
  }, []);

  return { lat, lon, locationError, isLoading };
};
