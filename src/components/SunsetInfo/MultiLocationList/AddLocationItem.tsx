import { Button, HStack, Text } from '@chakra-ui/react';
import { MdAddLocationAlt } from 'react-icons/md';

export const AddLocationItem = ({ addLocation }: { addLocation: () => void }) => {
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
