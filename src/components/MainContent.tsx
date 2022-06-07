import { VFC } from 'react';
import { Flex } from '@chakra-ui/react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: VFC = () => {
  return (
    <Flex w='100%' direction={{ base: 'column', md: 'row' }} bgColor='gray.100'>
      <Map />
      <SunsetInfo />
    </Flex>
  );
};

export default MainContent;
