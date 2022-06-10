import { VFC } from 'react';
import { VStack } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';
import { RemainingTime } from './RemainingTime';
import MultiLocationList from './MultiLocationList';

const SunsetInfo: VFC = () => {
  return (
    <VStack
      w='full'
      minW={{ md: '400px' }}
      maxW={{ md: '540px' }}
      gap={{ base: 0, md: 2 }}
      p={{ base: 2, md: 4 }}
    >
      <CurrentLocation />
      <CurrentTime />
      <RemainingTime />
      <SunTime />
      <MultiLocationList />
    </VStack>
  );
};

export default SunsetInfo;
