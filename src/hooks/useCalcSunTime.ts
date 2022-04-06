import SunCalc from 'suncalc';

export const useCalcSunTime = (lat: number, lon: number, alt: number) => {
  const correctAlt = alt < 0 ? 0 : alt; // suncalc は alt(高度) 0m 未満に対応していないので、その場合は 0m として扱う
  // @ts-ignore
  const times = SunCalc.getTimes(new Date(), lat, lon, correctAlt); // @Types の型定義と SunCalc の実装が異なるので、この行のみ型検査無効
  const sunriseTime = times.sunrise.toLocaleTimeString();
  const sunsetTime = times.sunset.toLocaleTimeString();

  return { sunriseTime, sunsetTime };
};
