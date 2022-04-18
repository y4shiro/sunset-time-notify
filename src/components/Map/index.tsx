import { VFC } from 'react';

import { Box } from '@chakra-ui/react';
import GoogleMapReactComp from './GoogleMapReact';
import ReactGoogleMapsAPI from './ReactGoogleMapsAPI';
import MapBoxOfficial from './MapBoxOfficial';

const Map: VFC = () => {
  return (
    <Box w='100%' minH='80vh'>
      {/* <GoogleMapReactComp /> */}
      {/* <ReactGoogleMapsAPI /> */}
      <MapBoxOfficial />
    </Box>
  );
};

export default Map;
