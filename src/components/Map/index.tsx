import { VFC } from 'react';

import { Box } from '@chakra-ui/react';
import ReactMapGl from './ReactMapGl';
import MapboxGl from './MapboxGl';

const Map: VFC = () => {
  return (
    <Box w='100%' h={{ base: '45vh', md: '80vh' }}>
      <ReactMapGl />
      {/* <MapboxGl /> */}
    </Box>
  );
};

export default Map;
