import { VFC } from 'react';

import { Box } from '@chakra-ui/react';
import GoogleMapReactComp from './GoogleMapReact';
import ReactGoogleMapsAPI from './ReactGoogleMapsAPI';

const Map: VFC = () => {
  return (
    <Box w='100%' minH='80vh'>
      {/* <GoogleMapReactComp /> */}
      <ReactGoogleMapsAPI />
    </Box>
  );
};

export default Map;
