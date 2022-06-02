import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { BiTrash } from 'react-icons/bi';

import { calcSuntime } from '../../../lib/calcSuntime';
import { locationType } from '../../../utils/types';

export const LocationItem = (props: locationType & { removeLocation: (id: string) => void }) => {
  const { id, removeLocation } = props;
  const { latitude, longitude, altitude, name } = props.location;
  const { sunrise, sunset } = calcSuntime(new Date(), latitude, longitude, altitude);

  const formattedSunrise = format(sunrise, 'HH:mm:ss');
  const formattedSunset = format(sunset, 'HH:mm:ss');

  return (
    <HStack w='full' px='2' justify='space-between' bgColor='blue.100'>
      <VStack w='full'>
        <Text w='full'>{name}</Text>
        <HStack w='full'>
          <Text>緯度: {latitude.toFixed(4)}</Text>
          <Text>経度: {longitude.toFixed(4)}</Text>
          <Text>高度: {altitude.toFixed(4)}</Text>
        </HStack>
        <HStack w='full'>
          <Text>日の出: {formattedSunrise}</Text>
          <Text>日の入: {formattedSunset}</Text>
        </HStack>
      </VStack>
      <IconButton
        color='red'
        aria-label='TrashButton'
        icon={<BiTrash size='24' />}
        onClick={() => removeLocation(id)}
      >
        Trash
      </IconButton>
    </HStack>
  );
};
