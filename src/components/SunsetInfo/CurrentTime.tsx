import { useState, useEffect, VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import { useCurrentTime } from '../../hooks/useCurrentTime';

const CurrentTime: VFC = () => {
  const [time, setTime] = useState('');
  const { currentTime } = useCurrentTime();

  useEffect(() => {
    setTime(format(new Date(), 'yyyy年MM月dd日 hh:mm:ss'));
  }, [currentTime]);

  return (
    <Box
      my={4}
      p={4}
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <Text fontSize='20'>現在時刻 : {time}</Text>
    </Box>
  );
};

export { CurrentTime };
