import SunCalc from 'suncalc';

export const calcSuntime = (
  date: Date,
  latitude: number,
  longitude: number,
  altitude: number,
): { sunrise: Date; sunset: Date } => {
  const correctAlt = altitude < 0 ? 0 : altitude; // suncalc は alt(高度) 0m 未満に対応していないので、その場合は 0m として扱う
  const times = SunCalc.getTimes(date, latitude, longitude, correctAlt); // @Types の型定義と SunCalc の実装が異なるので、src/types.d.ts で型定義拡張を行った

  return { sunrise: times.sunrise, sunset: times.sunset };
};
