import { VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';
import { useCalcSunTime } from '../../hooks/useCalcSunTime';

export const SunTime: VFC = () => {
  const { latitude, longitude, altitude, isLoading } = useCurrentPosition();
  const { sunriseTime, sunsetTime } = useCalcSunTime(latitude, longitude, altitude);

  return (
    <HStack w='full' justifyContent='space-around'>
      <Box p='4' borderRadius='xl' shadow='lg' bgColor='#FFBF15'>
        <Text textColor='white' fontSize={{ base: 20, md: 24 }} fontWeight='bold'>
          日の出 {isLoading ? '読込中' : `${sunriseTime}`}
        </Text>
      </Box>
      <Box p='4' borderRadius='xl' shadow='lg' bgColor='#142C8C'>
        <Text textColor='white' fontSize={{ base: 20, md: 24 }} fontWeight='bold'>
          日の入 {isLoading ? '読込中' : `${sunsetTime}`}
        </Text>
      </Box>
    </HStack>
  );
};
