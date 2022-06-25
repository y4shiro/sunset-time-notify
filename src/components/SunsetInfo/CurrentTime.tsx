import React, { useEffect, useState, VFC } from 'react';
import { HStack, Skeleton, Text } from '@chakra-ui/react';
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
      p={{ base: 3, md: 4 }}
      gap='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <FaClock fontSize='24' />
      <Skeleton isLoaded={!!currentTimeString}>
        <Text fontSize={{ base: 16, md: 20 }}>{currentTimeString}</Text>
      </Skeleton>
    </HStack>
  );
};

export { CurrentTime };
