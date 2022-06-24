import { VFC } from 'react';

import { Box } from '@chakra-ui/react';
import ReactMapGl from './ReactMapGl';

const Map: VFC = () => {
  return (
    <Box w='100%' h={{ base: '45vh', md: '90vh' }}>
      <ReactMapGl />
    </Box>
  );
};

export default Map;
