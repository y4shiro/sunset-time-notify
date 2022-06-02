import { VFC } from 'react';
import { StackDivider, HStack, Text, VStack, Button } from '@chakra-ui/react';
import { MdAddLocationAlt } from 'react-icons/md';

import { LocationItem } from './LocationItem';
import { useLocationsList } from '../../../hooks/useLocationsList';

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
