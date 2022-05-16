import { useEffect, useState } from 'react';
import { intervalToDuration, isValid, nextDay } from 'date-fns';

import { useRecoilValue } from 'recoil';
import { altitudeState, latitudeState, longitudeState } from '../stores/currentPositionState';
import { suntimeIsvalidState } from '../stores/sunTimeState';

import { calcSuntime } from '../lib/calcSuntime';
import { currentTimeState } from './../stores/currentTimeState';

type isTime = 'beforeSunrise' | 'beforeSunset' | 'nextSunrise';

export const useRemainingTime = (): { remainingTime: string; isTime: isTime } => {
  const latitude = useRecoilValue(latitudeState); // Latitude 緯度
  const longitude = useRecoilValue(longitudeState); // Longitude 経度
  const altitude = useRecoilValue(altitudeState); // Altitude 高度

  const today = new Date();
  const currentTime = useRecoilValue(currentTimeState);

  const [remainingTime, setRemainingTime] = useState<string>('');
  const [isTime, setIsTime] = useState<isTime>('beforeSunrise');

  const { sunrise, sunset } = calcSuntime(today, latitude, longitude, altitude);
  const { sunrise: nextSunrise } = calcSuntime(nextDay(today, 1), latitude, longitude, altitude);

  const formatStringTime = (remain: Duration) => {
    const hours = String(remain.hours).padStart(2, '0');
    const minutes = String(remain.minutes).padStart(2, '0');
    const seconds = String(remain.seconds).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (currentTime < sunrise) {
      const remain = intervalToDuration({ start: currentTime, end: sunrise });
      setRemainingTime(formatStringTime(remain));
      setIsTime('beforeSunrise');
    } else if (sunrise < currentTime && currentTime < sunset) {
      const remain = intervalToDuration({ start: currentTime, end: sunset });
      setRemainingTime(formatStringTime(remain));
      setIsTime('beforeSunset');
    } else if (sunset < currentTime && currentTime < nextSunrise) {
      const remain = intervalToDuration({ start: currentTime, end: nextSunrise });
      setRemainingTime(formatStringTime(remain));
      setIsTime('nextSunrise');
    }
  }, [currentTime, latitude, longitude]);

  return { remainingTime, isTime };
};
