import { VFC } from 'react';
import { VStack } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';
import { RemainingTime } from './RemainingTime';

const SunsetInfo: VFC = () => {
  return (
    <VStack
      w='full'
      minW={{ md: '400px' }}
      maxW={{ md: '540px' }}
      gap={{ base: 0, md: 2 }}
      p={{ base: 2, md: 4 }}
      bgColor='gray.100'
    >
      <CurrentLocation />
      <CurrentTime />
      <RemainingTime />
      <SunTime />
    </VStack>
  );
};

export default SunsetInfo;
