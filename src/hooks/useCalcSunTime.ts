import { getSunrise, getSunset } from 'sunrise-sunset-js';

export const useCalcSunTime = (lat: number, lon: number, alt: number) => {
  const sunriseTime = getSunrise(lat, lon, new Date()).toLocaleTimeString();
  const sunsetTime = getSunset(lat, lon, new Date()).toLocaleTimeString();

  return { sunriseTime, sunsetTime };
};
