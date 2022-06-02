import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { locationType } from '../utils/types';
import { useAsyncCurrentPosition } from './useAsyncCurrentPosition';
import { useAsyncCurrentPlaceName } from './useAsyncCurrentPlaceName';

const locationData: locationType[] = [
  {
    id: '1',
    location: {
      latitude: 35.6814,
      longitude: 139.7671,
      altitude: 14.5352,
      name: '日本, 東京都千代田区',
    },
    enabledNotify: false,
  },
  {
    id: '2',
    location: {
      latitude: 34.7017,
      longitude: 135.4982,
      altitude: 17.7244,
      name: '日本, 大阪府大阪市北区',
    },
    enabledNotify: false,
  },
  {
    id: '3',
    location: {
      latitude: 33.59,
      longitude: 130.4236,
      altitude: 9.9134,
      name: '日本, 福岡県福岡市博多区',
    },
    enabledNotify: false,
  },
];

export const useLocationsList = () => {
  const [locations, setLocations] = useState<locationType[]>(locationData);
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
    const state = locations.filter((lists) => {
      return lists.id !== id;
    });
    setLocations(state);
  };

  return { locations, removeLocation, addLocation };
};
