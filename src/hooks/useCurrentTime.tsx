import { useState, useEffect } from 'react';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentTime]);

  return { currentTime };
};
