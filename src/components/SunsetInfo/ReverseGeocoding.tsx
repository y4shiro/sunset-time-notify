import React, { VFC } from 'react';
import { useQuery } from 'react-query';

import { Button, HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

const ReverseGeocoding: VFC = () => {
  const { latitude, longitude } = useCurrentPosition();

  const fetchPlaceName = async () => {
    const fetchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxAccessToken}&language=ja&types=country,region,locality,place`;
    const data = await (await fetch(fetchUrl)).json();
    const placeName = await data.features[0].place_name;
    return placeName;
  };

  const { data: placeName, isLoading, isFetching, refetch } = useQuery('placeName', fetchPlaceName);

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
        <Text fontSize={{ base: 16, md: 20 }}>
          {isLoading || isFetching ? 'Loading...' : placeName}
        </Text>
        <Button onClick={() => refetch()}>再読み込み</Button>
      </HStack>
    </HStack>
  );
};

export { ReverseGeocoding };
