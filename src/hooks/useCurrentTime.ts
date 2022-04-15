import { useState, useEffect } from 'react';
import format from 'date-fns/format';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTimeString, setCurrentTimeString] = useState('');

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
