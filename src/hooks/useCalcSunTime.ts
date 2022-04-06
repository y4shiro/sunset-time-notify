import SunCalc from 'suncalc';
import format from 'date-fns/format';

export const useCalcSunTime = (lat: number, lon: number, alt: number) => {
  const correctAlt = alt < 0 ? 0 : alt; // suncalc は alt(高度) 0m 未満に対応していないので、その場合は 0m として扱う
  const times = SunCalc.getTimes(new Date(), lat, lon, correctAlt); // @Types の型定義と SunCalc の実装が異なるので、src/types.d.ts で型定義拡張を行った

  const sunriseTime = format(times.sunrise, 'HH:mm:ss');
  const sunsetTime = format(times.sunset, 'HH:mm:ss');

  return { sunriseTime, sunsetTime };
};
