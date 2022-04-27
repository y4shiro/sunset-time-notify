import { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

const SunsetInfo: VFC = () => {
  const { latitude, longitude, altitude, locationError, isLoading } = useCurrentPosition();

  return (
    <Box w='full' bgColor='gray.100'>
      <Box m={8} p={8} borderRadius='xl' shadow='lg' bgColor='gray.50'>
        <Heading size='lg'>SunsetInfo カード</Heading>
        <CurrentLocation
          latitude={latitude}
          longitude={longitude}
          altitude={altitude}
          locationError={locationError}
        />
        <CurrentTime />
        <SunTime
          latitude={latitude}
          longitude={longitude}
          altitude={altitude}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default SunsetInfo;
