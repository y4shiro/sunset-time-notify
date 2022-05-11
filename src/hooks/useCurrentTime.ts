import { useEffect } from 'react';
import format from 'date-fns/format';

import { useRecoilState } from 'recoil';
import { currentTimeState, currentTimeStringState } from './../stores/currentTimeState';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);
  const [currentTimeString, setCurrentTimeString] = useRecoilState(currentTimeStringState);

  const updateTime = (currentDate: Date = new Date()) => {
    setCurrentTime(currentDate);
    setCurrentTimeString(format(currentDate, 'yyyy年MM月dd日 HH:mm:ss'));
  };

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { currentTime, currentTimeString };
};
