import { useState, useEffect } from 'react';

export const useCurrentPosition = () => {
  const [latitude, setLatitude] = useState(0); // Latitude 緯度
  const [longitude, setLongitude] = useState(0); // Longitude 経度
  const [altitude, setAltitude] = useState<number>(0); // Altitude 高度
  const [locationError, setLocationError] = useState('');
  const isLoading = !latitude && !longitude;

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
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          if (!position.coords.altitude) return; // 高度は PC 等取得できない端末があるので、未取得の場合は早期リターン
          setAltitude(position.coords.altitude);
        } catch (e) {
          // @ts-ignore
          setLocationError(e.message);
        }
      };

      getPosition();
    } else {
      setLocationError('お使いのブラウザでは位置情報を取得できません');
    }
  }, []);

  return { latitude, longitude, altitude, locationError, isLoading };
};
