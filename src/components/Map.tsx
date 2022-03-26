import { VFC } from 'react';
import Image from 'next/image';

import { Box, css } from '@chakra-ui/react';

const Map: VFC = () => {
  return (
    <Box w='100%' bg='green.100'>
      <Image
        src='/Map.png'
        width='100'
        height='100%'
        layout='responsive'
        objectFit='contain'
        alt='Map'
      />
    </Box>
  );
};

export default Map;
