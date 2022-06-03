import { Box, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { BiTrash } from 'react-icons/bi';
import { FiSunrise, FiSunset } from 'react-icons/fi';

import { calcSuntime } from '../../../lib/calcSuntime';
import { locationType } from '../../../utils/types';

export const LocationItem = (props: locationType & { removeLocation: (id: string) => void }) => {
  const { id, removeLocation } = props;
  const { latitude, longitude, altitude, name } = props.location;
  const { sunrise, sunset } = calcSuntime(new Date(), latitude, longitude, altitude);

  const formattedSunrise = format(sunrise, 'HH:mm:ss');
  const formattedSunset = format(sunset, 'HH:mm:ss');

  return (
    <HStack w='full' px='2' justify='space-between'>
      <VStack w='full' spacing='0'>
        <Text w='full' fontSize='20'>
          {name}
        </Text>
        <HStack w='full' fontSize='14' color='gray.400'>
          <Text>緯度: {latitude.toFixed(4)}</Text>
          <Text>経度: {longitude.toFixed(4)}</Text>
          <Text>高度: {altitude.toFixed(4)}</Text>
        </HStack>
        <HStack w='full' gap='2'>
          <HStack>
            <FiSunrise />
            <Text>{formattedSunrise}</Text>
          </HStack>
          <HStack>
            <FiSunset />
            <Text>{formattedSunset}</Text>
          </HStack>
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
