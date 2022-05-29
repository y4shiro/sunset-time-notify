import { VFC } from 'react';
import { Text, HStack } from '@chakra-ui/react';
import { FiSunrise, FiSunset } from 'react-icons/fi';

import { useRemainingTime } from '../../hooks/useRemainingTime';

const RemainingTime: VFC = () => {
  const { remainingTime, isTime } = useRemainingTime();

  return (
    <HStack
      w='full'
      p={{ base: 3, md: 4 }}
      gap='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      {isTime === 'beforeSunset' ? <FiSunset fontSize='24' /> : <FiSunrise fontSize='24' />}
      <Text fontSize={{ base: 16, md: 20 }}>
        {isTime === 'beforeSunset' ? '日の入' : '日の出'}まで {remainingTime}
      </Text>
    </HStack>
  );
};

export { RemainingTime };
