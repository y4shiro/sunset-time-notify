import { VFC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const SFC: VFC = () => {
  return (
    <Flex
      w='100%'
      h='480px'
      justifyContent='center'
      alignItems='center'
      border='2px'
      borderColor='gray.300'
    >
      <Text fontSize='64'>SFC</Text>
    </Flex>
  );
};

export default SFC;
