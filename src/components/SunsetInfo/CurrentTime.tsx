import React, { useEffect, useState, VFC } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';
import { format } from 'date-fns';

import { useCurrentTime } from '../../hooks/useCurrentTime';

const CurrentTime: VFC = () => {
  const { currentTime } = useCurrentTime();
  const [currentTimeString, setCurrentTimeString] = useState('');

  useEffect(() => {
    setCurrentTimeString(format(currentTime, 'yyyy/MM/dd HH:mm:ss'));
  }, [currentTime]);

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
