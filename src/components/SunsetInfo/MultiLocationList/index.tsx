import { VFC } from 'react';
import { StackDivider, VStack } from '@chakra-ui/react';

import { LocationItem } from './LocationItem';
import { useLocationsList } from '../../../hooks/useLocationsList';
import { AddLocationItem } from './AddLocationItem';

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
      <AddLocationItem addLocation={addLocation} />
      {locations.map((data) => (
        <LocationItem key={data.id} removeLocation={removeLocation} {...data} />
      ))}
    </VStack>
  );
};

export default MultiLocationList;
