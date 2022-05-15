import { VFC } from 'react';
import { Text, HStack } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useRemainingTime } from '../../hooks/useRemainingTime';

const RemainingTime: VFC = () => {
  const { remainingTime, isTime } = useRemainingTime();

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
        {isTime === 'beforeSunset' ? '日の入' : '日の出'}まであと {remainingTime}
      </Text>
    </HStack>
  );
};

export { RemainingTime };
