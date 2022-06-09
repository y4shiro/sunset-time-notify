import { VFC } from 'react';
import { Box, Flex, BoxProps, ButtonProps, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const MotionChakraBox = motion<Omit<BoxProps, 'transition'>>(Box);
const MotionButton = motion<Omit<ButtonProps, 'transition'>>(Button);

const FramerMotion: VFC = () => {
  return (
    <Flex w='100%' minH='80vh' bgColor='gray.100'>
      <MotionChakraBox
        m='24'
        w='100px'
        h='100px'
        bgColor='green'
        animate={{ scale: 2 }}
        transition={{ duration: 2 }}
      />
      <MotionChakraBox
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
      <MotionButton
        m='24'
        w='100px'
        h='100px'
        colorScheme='twitter'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </Flex>
  );
};

export default FramerMotion;
