import { VFC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import SunsetInfo from './SunsetInfo';
import SFC from './SFC';

const LayoutTest: VFC = () => {
  return (
    <Box>
      <SFC />
      <SFC />
      <SFC />
    </Box>
  );
};

export default LayoutTest;
