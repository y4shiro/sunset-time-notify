import { VFC } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

export const InputForm: VFC = () => {
  return (
    <>
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
    </>
  );
};
