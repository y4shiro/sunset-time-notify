import { useState, useEffect } from 'react';
import format from 'date-fns/format';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTimeString, setCurrentTimeString] = useState('');

  const updateTime = () => {
    const currentDate = new Date();
    setCurrentTime(currentDate);
    setCurrentTimeString(format(currentDate, 'yyyy年MM月dd日 hh:mm:ss'));
  };

  useEffect(() => {
    updateTime();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateTime();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentTime]);

  return { currentTime, currentTimeString };
};
