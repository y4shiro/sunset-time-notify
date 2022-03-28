import { VFC } from 'react';
import { Flex } from '@chakra-ui/react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: VFC = () => {
  return (
    <Flex>
      <Map />
      <SunsetInfo />
    </Flex>
  );
};

export default MainContent;
