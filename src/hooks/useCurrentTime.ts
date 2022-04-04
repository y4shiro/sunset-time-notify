import { useState, useEffect } from 'react';
import format from 'date-fns/format';

export const useCurrentTime = () => {
  const [startTime, setStartTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [currentTimeString, setCurrentTimeString] = useState('');

  const updateTime = (currentDate = Date.now()) => {
    setCurrentTime(currentDate);
    setCurrentTimeString(format(currentDate, 'yyyy年MM月dd日 HH:mm:ss'));
  };

  useEffect(() => {
    updateTime();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const diff = Date.now() - startTime;
      updateTime();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { currentTime, currentTimeString };
};
