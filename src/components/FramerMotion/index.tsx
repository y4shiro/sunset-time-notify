import { useState, VFC } from 'react';
import { Box, Button, HStack, StackProps, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, AnimateSharedLayout, HTMLMotionProps, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionStackProps = Merge<StackProps, HTMLMotionProps<'div'>>;
const MotionV: React.FC<MotionStackProps> = motion(VStack);
const MotionH: React.FC<MotionStackProps> = motion(HStack);

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
          <MotionV w='100%' p='4' borderRadius='lg' bgColor={'red.200'} layout>
            <AnimatePresence>
              {list.map((item) => (
                <Item key={item.id} id={item.id} removeList={removeList} />
              ))}
            </AnimatePresence>
          </MotionV>
        </AnimateSharedLayout>
      </VStack>
    </Box>
  );
};

const Item = ({ id, removeList }: { id: string; removeList: (id: string) => void }) => {
  return (
    <MotionH
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
    </MotionH>
  );
};

export default FramerMotion;
