import { VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

export const SunTime: VFC = () => {
  return (
    <HStack justifyContent='space-around'>
      <Box borderRadius='xl' shadow='lg' bgColor='#FFBF15'>
        <Text my={4} mx={6} textColor='white' fontSize='24' fontWeight='bold'>
          日の出 : 06:00
        </Text>
      </Box>
      <Box borderRadius='xl' shadow='lg' bgColor='#142C8C'>
        <Text my={4} mx={6} textColor='white' fontSize='24' fontWeight='bold'>
          日の入 : 18:00
        </Text>
      </Box>
    </HStack>
  );
};
