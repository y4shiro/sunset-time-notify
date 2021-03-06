import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { locationType } from '../utils/types';
import { useAsyncCurrentPosition } from './useAsyncCurrentPosition';
import { useAsyncCurrentPlaceName } from './useAsyncCurrentPlaceName';

export const useLocationsList = () => {
  const loadLocation = () => {
    try {
      const item = window.localStorage.getItem('locations');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const [locations, setLocations] = useState<locationType[]>(loadLocation);
  const { getPositionOnce } = useAsyncCurrentPosition();
  const { getCurrentPlaceName } = useAsyncCurrentPlaceName();

  const addLocation = async () => {
    const position = await getPositionOnce();
    const placeName = await getCurrentPlaceName();

    const state: locationType = {
      id: uuidv4(),
      location: {
        latitude: position.latitude,
        longitude: position.longitude,
        altitude: position.altitude,
        name: placeName,
      },
      enabledNotify: false,
    };
    setLocations((s) => [...s, state]);
  };

  const removeLocation = (id: string) => {
    setLocations((s) => {
      return s.filter((list) => list.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem('locations', JSON.stringify(locations));
  }, [locations]);

  return { locations, removeLocation, addLocation };
};
