import { useState, VFC } from 'react';
import {
  Box,
  BoxProps,
  ButtonProps,
  Button,
  HStack,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion<Omit<BoxProps, 'transition' | 'style'>>(Box);
const MotionButton = motion<Omit<ButtonProps, 'transition'>>(Button);
const MotionHStack = motion<Omit<StackProps, 'transition'>>(HStack);
const MotionVStack = motion<Omit<StackProps, 'transition'>>(VStack);

const FramerMotion: VFC = () => {
  const [list, setList] = useState<{ id: string }[]>([]);

  const addList = () => setList((s) => [...s, { id: uuidv4() }]);
  const removeList = (id: string) => setList((s) => s.filter((item) => item.id !== id));

  return (
    <Box w='100%' minH='80vh' bgColor='gray.100'>
      <VStack p='2' w='540px'>
        <Button colorScheme='green' onClick={() => addList()}>
          リスト追加
        </Button>
        <AnimateSharedLayout>
          <MotionVStack p='4' bgColor={'red.200'} layout>
            <AnimatePresence>
              {list.map((item) => (
                <Item key={item.id} id={item.id} removeList={removeList} />
              ))}
            </AnimatePresence>
          </MotionVStack>
        </AnimateSharedLayout>
      </VStack>
    </Box>
  );
};

const Item = ({ id, removeList }: { id: string; removeList: (id: string) => void }) => {
  return (
    <MotionHStack
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.25 } }}
      exit={{ opacity: 0 }}
      w='480px'
      p='2'
      borderRadius='8'
      bgColor='twitter.300'
      justify='space-between'
    >
      <Text>{id}</Text>
      <Button onClick={() => removeList(id)}>Delete</Button>
    </MotionHStack>
  );
};

export default FramerMotion;
