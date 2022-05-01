import { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';

const SunsetInfo: VFC = () => {
  return (
    <Box w='full' bgColor='gray.100'>
      <Box m={8} p={8} borderRadius='xl' shadow='lg' bgColor='gray.50'>
        <CurrentLocation />
        <CurrentTime />
        <SunTime />
      </Box>
    </Box>
  );
};

export default SunsetInfo;
