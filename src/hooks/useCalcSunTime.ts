import SunCalc from 'suncalc';
import { format, isValid } from 'date-fns';

export const useCalcSunTime = (
  lat: number,
  lon: number,
  alt: number,
  date: Date = new Date(),
): { sunriseTime: string; sunsetTime: string } => {
  // 引数で渡ってきた date が Invalid Date の場合
  if (!isValid(date)) {
    return { sunriseTime: '不正な日付です', sunsetTime: '不正な日付です' };
  }

  const correctAlt = alt < 0 ? 0 : alt; // suncalc は alt(高度) 0m 未満に対応していないので、その場合は 0m として扱う
  const times = SunCalc.getTimes(date, lat, lon, correctAlt); // @Types の型定義と SunCalc の実装が異なるので、src/types.d.ts で型定義拡張を行った

  // SunCalc で算出した日時が Invalide Date だった場合
  // 基本的に白夜・極夜の場合が多いが、他のパターンが漏れている可能性もある
  if (!isValid(times.sunrise)) {
    return {
      sunriseTime: '白夜または極夜です',
      sunsetTime: '白夜または極夜です',
    };
  }

  // 正常に日時が算出できた場合は、日の出日の入時刻を文字列で返す
  return {
    sunriseTime: format(times.sunrise, 'HH:mm:ss'),
    sunsetTime: format(times.sunset, 'HH:mm:ss'),
  };
};
