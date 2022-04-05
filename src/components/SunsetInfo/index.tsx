import { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { CurrentLocation } from './CurrentLocation';
import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';
import { InputForm } from './InputForm';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

const SunsetInfo: VFC = () => {
  const { lat, lon, locationError } = useCurrentPosition();

  return (
    <Box w='full' bgColor='gray.100'>
      <Box m={8} p={8} borderRadius='xl' shadow='lg' bgColor='gray.50'>
        <Heading size='lg'>SunsetInfo カード</Heading>
        <CurrentLocation lat={lat} lon={lon} locationError={locationError} />
        <CurrentTime />
        <SunTime />
        <InputForm />
      </Box>
    </Box>
  );
};

export default SunsetInfo;
