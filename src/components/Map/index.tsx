import { VFC } from 'react';

import { Box } from '@chakra-ui/react';
import GoogleMapReactComp from './GoogleMapReact';

const Map: VFC = () => {
  return (
    <Box w='100%' minH='80vh'>
      <GoogleMapReactComp />
    </Box>
  );
};

export default Map;
