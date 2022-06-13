import { useState, VFC } from 'react';
import { Box, Flex, BoxProps, ButtonProps, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion<Omit<BoxProps, 'transition' | 'style'>>(Box);
const MotionButton = motion<Omit<ButtonProps, 'transition'>>(Button);

const FramerMotion: VFC = () => {
  const [list, setList] = useState<{ id: string }[]>([]);

  const addList = () => setList((s) => [...s, { id: uuidv4() }]);
  const removeList = (id: string) => setList((s) => s.filter((item) => item.id !== id));

  return (
    <Box w='100%' minH='80vh' bgColor='gray.100'>
      <VStack m='2' gap='2'>
        <Button colorScheme='green' onClick={() => addList()}>
          リスト追加
        </Button>
        {list.map((item) => (
          <HStack
            w='480px'
            p='2'
            borderRadius='8'
            bgColor='twitter.200'
            justify='space-between'
            key={item.id}
          >
            <Text>{item.id}</Text>
            <Button onClick={() => removeList(item.id)}>Delete</Button>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default FramerMotion;
