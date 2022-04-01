import { useEffect, useState, VFC } from 'react';
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

import { format } from 'date-fns';

const SunsetInfo: VFC = () => {
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
    <Box w='full' bgColor='gray.100'>
      <Box m={8} p={8} borderRadius='xl' shadow='lg' bgColor='gray.50'>
        <Heading size='lg'>SunsetInfo カード</Heading>

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

        <FormControl>
          <Box my={4}>
            <FormLabel htmlFor='countries'>国名を選んでください</FormLabel>
            <Select id='countries'>
              <option value='United States'>United States</option>
              <option value='Canada'>Canada</option>
              <option value='France'>France</option>
              <option value='Germany'>Germany</option>
            </Select>
          </Box>

          <Box my={4}>
            <FormLabel htmlFor='text1'>フォーム1</FormLabel>
            <Input id='text1' type='text' placeholder='フォーム1' />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor='text2'>フォーム2</FormLabel>
            <Input id='text2' type='text' placeholder='フォーム2' />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor='text3'>フォーム3</FormLabel>
            <Input id='text3' type='text' placeholder='フォーム3' />
          </Box>
        </FormControl>

        <Button colorScheme='blue' type='submit'>
          計算開始
        </Button>
      </Box>
    </Box>
  );
};

export default SunsetInfo;
