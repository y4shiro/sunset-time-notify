import { VFC } from 'react';
import Image from 'next/image';

import { Box } from '@chakra-ui/react';
import GoogleMaps from './GoogleMaps';

const Map: VFC = () => {
  return (
    <Box w='100%' minH='80vh'>
      <GoogleMaps />
    </Box>
  );
};

export default Map;
