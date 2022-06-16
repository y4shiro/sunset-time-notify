import { VFC } from 'react';
import { HStack, StackDivider, StackProps, VStack } from '@chakra-ui/react';

import { LocationItem } from './LocationItem';
import { useLocationsList } from '../../../hooks/useLocationsList';
import { AddLocationItem } from './AddLocationItem';
import { AnimatePresence, HTMLMotionProps, LayoutGroup, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionStackProps = Merge<StackProps, HTMLMotionProps<'div'>>;
export const MotionV: React.FC<MotionStackProps> = motion(VStack);
export const MotionH: React.FC<MotionStackProps> = motion(HStack);

const MultiLocationList: VFC = () => {
  const { locations, removeLocation, addLocation } = useLocationsList();

  return (
    <LayoutGroup>
      <MotionV
        w='full'
        p='2'
        borderRadius='lg'
        border='1px'
        borderColor='gray.200'
        shadow='md'
        bgColor='white'
        divider={<StackDivider />}
        layout
      >
        <AnimatePresence initial={false}>
          <AddLocationItem addLocation={addLocation} />
          {locations.map((data) => (
            <LocationItem key={data.id} removeLocation={removeLocation} {...data} />
          ))}
        </AnimatePresence>
      </MotionV>
    </LayoutGroup>
  );
};

export default MultiLocationList;
