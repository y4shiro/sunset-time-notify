import { useState, useEffect, VFC } from 'react';
import { format } from 'date-fns';
import { Box, Text } from '@chakra-ui/react';

const CurrentTime: VFC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nowDate = format(new Date(), 'yyyy年MM月dd日 HH:mm:ss');
      setDate(nowDate);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [date]);
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
      <Text fontSize='20'>現在時刻 : {date}</Text>
    </Box>
  );
};

export { CurrentTime };
