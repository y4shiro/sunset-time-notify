import { useEffect, useState } from 'react';
import { format, isValid } from 'date-fns';

import { useRecoilValue, useRecoilState } from 'recoil';
import { altitudeState, latitudeState, longitudeState } from '../stores/currentPositionState';
import { suntimeIsvalidState } from '../stores/sunTimeState';

import { calcSuntime } from '../lib/calcSuntime';

export const useCurrentSuntime = (
  date: Date = new Date(),
): {
  sunriseTime: Date;
  sunsetTime: Date;
  sunriseTimeString: string;
  sunsetTimeString: string;
  isValid: boolean;
} => {
  const latitude = useRecoilValue(latitudeState); // Latitude 緯度
  const longitude = useRecoilValue(longitudeState); // Longitude 経度
  const altitude = useRecoilValue(altitudeState); // Altitude 高度

  const [sunriseTimeString, setSunriseTimeString] = useState('');
  const [sunsetTimeString, setSunsetTimeString] = useState('');
  const [suntimeIsvalid, setSuntimeIsvalid] = useRecoilState(suntimeIsvalidState);

  const { sunrise, sunset } = calcSuntime(date, latitude, longitude, altitude);

  useEffect(() => {
    // 引数で渡ってきた date が Invalid Date の場合
    if (!isValid(date)) {
      setSunriseTimeString('不正な日付です');
      setSunsetTimeString('不正な日付です');
      setSuntimeIsvalid(false);
      return;
    }

    // SunCalc で算出した日時が Invalide Date だった場合
    // 基本的に白夜・極夜の場合が多いが、他のパターンが漏れている可能性もある
    if (!isValid(sunrise)) {
      setSunriseTimeString('白夜または極夜');
      setSunsetTimeString('白夜または極夜');
      setSuntimeIsvalid(false);
      return;
    }

    // 正常に日時が算出できた場合は、日の出日の入時刻を文字列で返す
    setSunriseTimeString(format(sunrise, 'HH:mm:ss'));
    setSunsetTimeString(format(sunset, 'HH:mm:ss'));
    setSuntimeIsvalid(true);
  }, [date, sunrise, sunset, setSuntimeIsvalid]);

  return {
    sunriseTime: sunrise,
    sunsetTime: sunset,
    sunriseTimeString,
    sunsetTimeString,
    isValid: suntimeIsvalid,
  };
};
