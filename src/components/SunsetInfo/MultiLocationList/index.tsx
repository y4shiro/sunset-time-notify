import { VFC } from 'react';
import dynamic from 'next/dynamic';
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
    <VStack w='full' borderRadius='lg' spacing='0' shadow='md'>
      <LayoutGroup>
        <AddLocationItem addLocation={addLocation} />
        <MotionV w='full' p='2' borderBottomRadius='lg' bgColor='gray' layout>
          <AnimatePresence initial={false}>
            {locations.map((data) => (
              <LocationItem key={data.id} removeLocation={removeLocation} {...data} />
            ))}
          </AnimatePresence>
        </MotionV>
      </LayoutGroup>
    </VStack>
  );
};

const DynamicMultiLocationList = dynamic({ loader: async () => MultiLocationList }, { ssr: false });

export default DynamicMultiLocationList;
