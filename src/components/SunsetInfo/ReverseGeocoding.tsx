import React, { useState, VFC } from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

const ReverseGeocoding: VFC = () => {
  const [placeName, setPlaceName] = useState('');
  const { latitude, longitude } = useCurrentPosition();

  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

  const getPlaceName = () => {
    // const fetchUrl = `https://api.mapbox.com/search/v1/reverse/${longitude},${latitude}?language=ja&access_token=${mapboxAccessToken}&types=oaza`;
    const fetchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxAccessToken}&language=ja&types=country,region,locality,place`;
    fetch(fetchUrl, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const address = data.features[0].place_name;
        setPlaceName(address);
      });
  };

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
        <Button onClick={getPlaceName}>地名を取得</Button>
      </HStack>
    </HStack>
  );
};

export { ReverseGeocoding };
