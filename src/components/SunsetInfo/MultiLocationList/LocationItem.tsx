import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';

import { BiTrash } from 'react-icons/bi';
import { BsSignpostFill } from 'react-icons/bs';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';

import { calcSuntime } from '../../../lib/calcSuntime';
import { locationType } from '../../../utils/types';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const LocationItem = (props: locationType & { removeLocation: (id: string) => void }) => {
  const { id, removeLocation } = props;
  const { latitude, longitude, altitude, name } = props.location;
  const { sunrise, sunset } = calcSuntime(new Date(), latitude, longitude, altitude);

  const formattedSunrise = format(sunrise, 'HH:mm:ss');
  const formattedSunset = format(sunset, 'HH:mm:ss');

  return (
    <HStack w='full' px='2' justify='space-between'>
      <VStack w='full'>
        <VStack w='full' spacing='0'>
          <HStack w='full' fontSize={{ base: 16, md: 20 }}>
            <BsSignpostFill />
            <Text w='full' fontWeight='bold'>
              {name}
            </Text>
          </HStack>
          <HStack w='full' fontSize={{ base: 11, md: 14 }} color='gray.500'>
            <FaMapMarkerAlt />
            <Text>緯度: {latitude.toFixed(4)}</Text>
            <Text>経度: {longitude.toFixed(4)}</Text>
            <Text>高度: {altitude.toFixed(4)}</Text>
          </HStack>
        </VStack>

        <HStack w='full'>
          <HStack py='1' px='2' borderRadius='md' fontWeight='bold' bgColor='#fcd057'>
            <RiSunFill />
            <Text>{formattedSunrise}</Text>
          </HStack>
          <HStack py='1' px='2' borderRadius='md' fontWeight='bold' color='white' bgColor='#243ea4'>
            <RiMoonClearFill />
            <Text>{formattedSunset}</Text>
          </HStack>
        </HStack>
      </VStack>
      <IconButton
        color='red'
        bgColor='white'
        aria-label='TrashButton'
        icon={<BiTrash size='24' />}
        onClick={() => removeLocation(id)}
      >
        Trash
      </IconButton>
    </HStack>
  );
};
