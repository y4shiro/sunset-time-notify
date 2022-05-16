import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { currentTimeState } from './../stores/currentTimeState';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

  const updateTime = (currentDate: Date = new Date()) => {
    setCurrentTime(currentDate);
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

  return { currentTime };
};
