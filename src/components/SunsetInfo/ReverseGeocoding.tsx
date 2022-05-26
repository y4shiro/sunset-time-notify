import React, { useEffect, useState, VFC } from 'react';
import { useQuery } from 'react-query';

import { Button, HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';
import { useReactMapState } from '../../hooks/useReactMapState';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

const ReverseGeocoding: VFC = () => {
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
      console.log('refetch');
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

  return (
    <HStack
      w='full'
      p='4'
      gap='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <FaClock fontSize='24' />
      <HStack w='full' bgColor='blue.100' justify='space-between'>
        <Text fontSize={{ base: 16, md: 20 }}>{placeName}</Text>
        <Button onClick={() => refetch()}>再読み込み</Button>
      </HStack>
    </HStack>
  );
};

export { ReverseGeocoding };
