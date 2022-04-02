import { VFC } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';

import { CurrentTime } from './CurrentTime';
import { InputForm } from './InputForm';

const SunsetInfo: VFC = () => {
  return (
    <Box w='full' bgColor='gray.100'>
      <Box m={8} p={8} borderRadius='xl' shadow='lg' bgColor='gray.50'>
        <Heading size='lg'>SunsetInfo カード</Heading>
        <CurrentTime />

        <HStack justifyContent='space-around'>
          <Box
            borderRadius='xl'
            border='1px'
            borderColor='orange.300'
            shadow='lg'
            bgColor='#FFBF15'
          >
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

        <InputForm />
      </Box>
    </Box>
  );
};

export default SunsetInfo;
