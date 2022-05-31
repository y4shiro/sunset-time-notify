import React, { VFC } from 'react';
import { calcSuntime } from '../../lib/calcSuntime';

import { StackDivider, HStack, Text, VStack, IconButton } from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';
import { format } from 'date-fns';

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
      latitude: 34.7017,
      longitude: 135.4982,
      altitude: 17.7244,
      name: '日本, 大阪府大阪市北区',
    },
    enabledNotify: false,
  },
  {
    id: 3,
    location: {
      latitude: 33.59,
      longitude: 130.4236,
      altitude: 9.9134,
      name: '日本, 福岡県福岡市博多区',
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
  const { sunrise, sunset } = calcSuntime(new Date(), latitude, longitude, altitude);

  const formattedSunrise = format(sunrise, 'HH:mm:ss');
  const formattedSunset = format(sunset, 'HH:mm:ss');

  return (
    <HStack w='full' px='2' justify='space-between' bgColor='blue.100'>
      <VStack w='full'>
        <Text w='full'>{name}</Text>
        <HStack w='full'>
          <Text>緯度: {latitude}</Text>
          <Text>経度: {longitude}</Text>
          <Text>高度: {altitude}</Text>
        </HStack>
        <HStack w='full'>
          <Text>日の出: {formattedSunrise}</Text>
          <Text>日の入: {formattedSunset}</Text>
        </HStack>
      </VStack>
      <IconButton color='red' aria-label='TrashButton' icon={<BiTrash size='24' />}>
        Trash
      </IconButton>
    </HStack>
  );
};

export default MultiLocationList;
