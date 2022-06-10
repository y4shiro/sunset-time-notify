import { VFC } from 'react';
import { Box, Flex, BoxProps, ButtonProps, Button, HStack, Text } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';

const MotionBox = motion<Omit<BoxProps, 'transition' | 'style'>>(Box);
const MotionButton = motion<Omit<ButtonProps, 'transition'>>(Button);

const FramerMotion: VFC = () => {
  const x = useMotionValue(0);
  const background = useTransform(x, [-100, 0, 100], ['#ff008c', '#7700ff', 'rgb(230, 255, 0)']);

  return (
    <Box w='100%' minH='80vh' bgColor='gray.100'>
      <HStack w='100%' gap='32'>
        <MotionBox
          m='24'
          w='100px'
          h='100px'
          bgColor='green'
          animate={{ scale: 2 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        />
        <MotionBox
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
      </HStack>

      <HStack>
        <MotionBox m='24' w='100px' h='100px' bgColor='twitter' style={{ background }}>
          <MotionBox drag='x' dragConstraints={{ left: 0, right: 0 }} style={{ x }}>
            <Text color='gray.200' fontSize='16'>
              Drag me
            </Text>
          </MotionBox>
        </MotionBox>
        <MotionButton
          m='24'
          w='100px'
          h='100px'
          colorScheme='twitter'
          animate={{ rotate: 180 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2 }}
        />
      </HStack>
    </Box>
  );
};

export default FramerMotion;
