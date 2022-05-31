import React, { VFC } from 'react';
import { StackDivider, HStack, Text, VStack, IconButton } from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';

type locationType = {
  id: number;
  location: {
    latitude: number;
    longitude: number;
    altitude: number;
    name: string;
  };
  enabledNotify: boolean;
};

const locationData: locationType[] = [
  {
    id: 1,
    location: {
      latitude: 35.6814,
      longitude: 139.7671,
      altitude: 14.5352,
      name: '日本, 東京都千代田区',
    },
    enabledNotify: false,
  },
  {
    id: 2,
    location: {
      latitude: 35.6909,
      longitude: 139.7003,
      altitude: 52.27,
      name: '日本, 東京都新宿区',
    },
    enabledNotify: false,
  },
  {
    id: 3,
    location: {
      latitude: 35.466,
      longitude: 139.6227,
      altitude: 9.198,
      name: '日本, 神奈川県横浜市西区',
    },
    enabledNotify: false,
  },
];

const MultiLocationList: VFC = () => {
  return (
    <VStack
      w='full'
      p='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
      divider={<StackDivider />}
    >
      {locationData.map((data) => (
        <LocationItem key={data.id} {...data} />
      ))}
    </VStack>
  );
};

const LocationItem = (props: locationType) => {
  const { latitude, longitude, altitude, name } = props.location;

  return (
    <HStack w='full' px='2' justify='space-between' bgColor='blue.100'>
      <VStack w='full'>
        <Text w='full'>{name}</Text>
        <HStack w='full'>
          <Text>緯度: {latitude}</Text>
          <Text>経度: {longitude}</Text>
          <Text>高度: {altitude}</Text>
        </HStack>
      </VStack>
      <IconButton color='red' aria-label='TrashButton' icon={<BiTrash size='24' />}>
        Trash
      </IconButton>
    </HStack>
  );
};

export default MultiLocationList;
