import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useCurrentPosition } from './useCurrentPosition';
import { useReactMapState } from './useReactMapState';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

export const useReverseGeocoding = (): string => {
  const [isFetchEnabled, setIsFetchEnabled] = useState<boolean>(true);
  const [placeName, setPlaceName] = useState('');
  const { latitude, longitude } = useCurrentPosition();
  const { isMovingMap } = useReactMapState();

  const fetchPlaceName = async () => {
    const fetchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxAccessToken}&language=ja&types=country,region,locality,place`;
    const data = await (await fetch(fetchUrl)).json();
    const placeName = await data.features[0].place_name;
    return placeName;
  };

  const { data, isFetching, isError, isStale, refetch } = useQuery('placeName', fetchPlaceName);

  useEffect(() => {
    if (isMovingMap || isStale) return;
    if (isFetchEnabled) {
      refetch();
      setIsFetchEnabled(false);
      setTimeout(() => {
        setIsFetchEnabled(true);
      }, 1000);
    }
  }, [isMovingMap, refetch]);

  useEffect(() => {
    if (isFetching) setPlaceName('Loading...');
    else if (isError) setPlaceName('地名読み込みに失敗しました');
    else if (data) setPlaceName(data);
  }, [data, isFetching, isError]);

  return placeName;
};
