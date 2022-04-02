import { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { CurrentTime } from './CurrentTime';
import { SunTime } from './SunTime';
import { InputForm } from './InputForm';

const SunsetInfo: VFC = () => {
  return (
    <Box w='full' bgColor='gray.100'>
      <Box m={8} p={8} borderRadius='xl' shadow='lg' bgColor='gray.50'>
        <Heading size='lg'>SunsetInfo カード</Heading>
        <CurrentTime />
        <SunTime />
        <InputForm />
      </Box>
    </Box>
  );
};

export default SunsetInfo;
