import { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useCurrentTime } from '../../hooks/useCurrentTime';

const CurrentTime: VFC = () => {
  const { currentTimeStr } = useCurrentTime();

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
      <Text fontSize='20'>現在時刻 : {currentTimeStr}</Text>
    </Box>
  );
};

export { CurrentTime };
