import { useState, useEffect } from 'react';

export const useCurrentPosition = () => {
  const [lat, setLat] = useState(0); // Latitude 緯度
  const [lon, setLon] = useState(0); // Longitude 経度
  const [alt, setAlt] = useState<number>(0); // Altitude 高度
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
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      const getPosition = async () => {
        try {
          const position = await getCurrentPosition();
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          if (!position.coords.altitude) return; // 高度は PC 等取得できない端末があるので、未取得の場合は早期リターン
          setAlt(position.coords.altitude);
        } catch (err) {
          if (err instanceof GeolocationPositionError) {
            setLocationError(err.message);
          }
        }
      };

      getPosition();
    } else {
      setLocationError('お使いのブラウザでは位置情報を取得できません');
    }
  }, []);

  return { lat, lon, alt, locationError, isLoading };
};
