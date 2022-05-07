import { VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useCurrentTime } from '../../hooks/useCurrentTime';

const CurrentTime: VFC = () => {
  const { currentTimeString } = useCurrentTime();

  return (
    <HStack
      w='full'
      p='4'
      gap='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <FaClock fontSize='24' />
      <Text fontSize={{ base: 16, md: 20 }}>{currentTimeString}</Text>
    </HStack>
  );
};

export { CurrentTime };
