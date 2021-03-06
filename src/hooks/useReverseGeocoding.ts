import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';

import { useCurrentPosition } from './useCurrentPosition';
import { useReactMapState } from './useReactMapState';
import { currentPlaceNameState } from '../stores/currentPlaceNameState';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

export const useReverseGeocoding = (): { placeName: string; isFetching: boolean } => {
  const [isFetchEnabled, setIsFetchEnabled] = useState<boolean>(true);
  const [placeName, setPlaceName] = useRecoilState(currentPlaceNameState);
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

  return { placeName, isFetching };
};
