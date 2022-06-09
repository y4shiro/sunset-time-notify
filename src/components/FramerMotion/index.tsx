import { VFC } from 'react';
import { chakra, Box, Flex, BoxProps } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = motion<Omit<BoxProps, 'transition'>>(Box);

const FramerMotion: VFC = () => {
  return (
    <Flex w='100%' minH='80vh' bgColor='gray.100'>
      <ChakraBox
        m='24'
        w='100px'
        h='100px'
        bgColor='green'
        animate={{ scale: 2 }}
        transition={{ duration: 2 }}
      />
    </Flex>
  );
};

export default FramerMotion;
