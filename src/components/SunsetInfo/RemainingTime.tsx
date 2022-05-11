import { useState, VFC } from 'react';
import { Text, HStack } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

type isTime = 'day' | 'night';

const RemainingTime: VFC = () => {
  const [isTime, setIsTime] = useState<isTime>('day');

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
      <Text fontSize={{ base: 16, md: 20 }}>
        {isTime === 'day' ? '日の入' : '日の出'}まであと 00:00:00
      </Text>
    </HStack>
  );
};

export { RemainingTime };
