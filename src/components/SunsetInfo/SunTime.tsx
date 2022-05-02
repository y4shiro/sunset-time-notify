import { VFC } from 'react';
import { SimpleGrid, HStack, Text } from '@chakra-ui/react';
import { FiSunrise, FiSunset } from 'react-icons/fi';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';
import { useCalcSunTime } from '../../hooks/useCalcSunTime';

export const SunTime: VFC = () => {
  const { latitude, longitude, altitude, isLoading } = useCurrentPosition();
  const { sunriseTime, sunsetTime } = useCalcSunTime(latitude, longitude, altitude);

  return (
    <SimpleGrid w='full' columns={2} gap='4'>
      <HStack
        w='full'
        p='4'
        justifyContent='center'
        borderRadius='xl'
        shadow='lg'
        bgColor='#FFBF15'
      >
        <FiSunrise size='36' color='white' />
        <Text textColor='white' fontSize={{ base: 24, md: 26 }} fontWeight='bold'>
          {isLoading ? '読込中' : `${sunriseTime}`}
        </Text>
      </HStack>
      <HStack
        w='full'
        p='4'
        justifyContent='center'
        borderRadius='xl'
        shadow='lg'
        bgColor='#142C8C'
      >
        <FiSunset size='36' color='white' />
        <Text as='span' textColor='white' fontSize={{ base: 24, md: 26 }} fontWeight='bold'>
          {isLoading ? '読込中' : `${sunsetTime}`}
        </Text>
      </HStack>
    </SimpleGrid>
  );
};
