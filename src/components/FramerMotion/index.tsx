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
      <ChakraBox
        m='24'
        w='100px'
        h='100px'
        bgColor='green'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{ duration: 2 }}
      />
    </Flex>
  );
};

export default FramerMotion;
