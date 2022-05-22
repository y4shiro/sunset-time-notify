import { VFC } from 'react';
import { Box, VStack } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';
import { RemainingTime } from './RemainingTime';
import { ReverseGeocoding } from './ReverseGeocoding';

const SunsetInfo: VFC = () => {
  return (
    <VStack
      w={{ base: 'full' }}
      minW={{ md: '400px' }}
      maxW={{ md: '540px' }}
      gap='2'
      p={{ base: 4, md: 6 }}
      shadow='lg'
      bgColor='gray.100'
    >
      <ReverseGeocoding />
      <CurrentLocation />
      <CurrentTime />
      <RemainingTime />
      <SunTime />
    </VStack>
  );
};

export default SunsetInfo;
