import { VFC } from 'react';
import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react';

const SunsetInfo: VFC = () => {
  return (
    <div className='w-full bg-red-100'>
      <div className='m-6 p-6 max-h-full bg-white rounded-lg border border-gray-200 shadow-md'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800'>SunsetInfo カード</h5>
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

          <div className='mb-6'>
            <label htmlFor='text1' className='block mb-2 text-sm font-medium text-gray-900'>
              フォーム1
            </label>
            <input
              id='text1'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
              placeholder='フォーム1'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='text1' className='block mb-2 text-sm font-medium text-gray-900'>
              フォーム2
            </label>
            <input
              id='text2'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
              placeholder='フォーム2'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='text1' className='block mb-2 text-sm font-medium text-gray-900'>
              フォーム3
            </label>
            <input
              id='text2'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
              placeholder='フォーム3'
            />
          </div>
        </FormControl>

        <button
          type='button'
          className='p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg'
        >
          計算開始
        </button>
      </div>
    </div>
  );
};

export default SunsetInfo;
