import { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';

const SunsetInfo: VFC = () => {
  return (
    <Box w='full' p={{ base: 4, md: 6 }} shadow='lg' bgColor='gray.100'>
      <CurrentLocation />
      <CurrentTime />
      <SunTime />
    </Box>
  );
};

export default SunsetInfo;
