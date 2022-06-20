import { Button, HStack, Text } from '@chakra-ui/react';
import { MdAddLocationAlt } from 'react-icons/md';

export const AddLocationItem = ({
  addLocation,
  bgColor,
}: {
  addLocation: () => void;
  bgColor: string;
}) => {
  return (
    <HStack w='full' pt='2' borderTopRadius='lg' justify='center' bgColor={bgColor}>
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
