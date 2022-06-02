import { VFC } from 'react';
import { format } from 'date-fns';

import { StackDivider, HStack, Text, VStack, IconButton, Button } from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';
import { MdAddLocationAlt } from 'react-icons/md';

import { locationType } from '../../utils/types';
import { calcSuntime } from '../../lib/calcSuntime';
import { useLocationsList } from '../../hooks/useLocationsList';

const MultiLocationList: VFC = () => {
  const { locations, removeLocation, addLocation } = useLocationsList();

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
      {locations.map((data) => (
        <LocationItem key={data.id} removeLocation={removeLocation} {...data} />
      ))}
      <AddLocationItem addLocation={addLocation} />
    </VStack>
  );
};

const LocationItem = (props: locationType & { removeLocation: (id: string) => void }) => {
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

const AddLocationItem = ({ addLocation }: { addLocation: () => void }) => {
  return (
    <HStack w='full' px='2' justify='center'>
      <Button
        bgColor='green'
        color='white'
        _hover={{ bg: 'green.500' }}
        gap='2'
        onClick={() => addLocation()}
      >
        <MdAddLocationAlt size='24' />
        <Text>現在地をリストに追加</Text>
      </Button>
    </HStack>
  );
};

export default MultiLocationList;
