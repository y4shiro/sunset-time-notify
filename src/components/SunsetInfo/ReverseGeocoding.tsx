import React, { useState, VFC } from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

const ReverseGeocoding: VFC = () => {
  const [placeName, setPlaceName] = useState('');
  const { latitude, longitude } = useCurrentPosition();

  const getPlaceName = () => {
    console.log('Get PlaceName');
    setPlaceName('地名取得したよ');
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
