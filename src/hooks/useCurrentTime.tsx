import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());
      setCurrentTimeStr(format(currentTime, 'yyyy年MM月dd日 hh:mm:ss'));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentTime]);

  return { currentTime, currentTimeStr };
};
