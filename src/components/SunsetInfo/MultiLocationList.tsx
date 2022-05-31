import React, { VFC } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

const MultiLocationList: VFC = () => {
  return (
    <VStack
      w='full'
      p={{ base: 3, md: 4 }}
      gap='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <LocationItem name='地名1' />
      <LocationItem name='地名2' />
      <LocationItem name='地名3' />
    </VStack>
  );
};

const LocationItem = (props: { name: string }) => {
  return (
    <HStack w='full' p='2' bgColor='blue.100'>
      <Text>{props.name}</Text>
      <Text>緯度: 0000</Text>
      <Text>経度: 0000</Text>
      <Text>高度: 0000</Text>
    </HStack>
  );
};

export default MultiLocationList;
