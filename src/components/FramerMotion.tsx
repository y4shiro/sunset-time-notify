import { VFC } from 'react';
import { Flex } from '@chakra-ui/react';

const FramerMotion: VFC = () => {
  return (
    <Flex w='100%' minH='80vh' direction={{ base: 'column', md: 'row' }} bgColor='gray.100'>
      Hello
    </Flex>
  );
};

export default FramerMotion;
