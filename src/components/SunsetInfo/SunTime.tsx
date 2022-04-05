import { VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { getSunrise, getSunset } from 'sunrise-sunset-js';

type Props = {
  lat: number;
  lon: number;
  alt: number;
  isLoading: boolean;
};

export const SunTime: VFC<Props> = ({ lat, lon, alt, isLoading }) => {
  const sunriseTime = getSunrise(lat, lon, new Date()).toLocaleTimeString();
  const sunsetTime = getSunset(lat, lon, new Date()).toLocaleTimeString();

  return (
    <HStack justifyContent='space-around'>
      <Box borderRadius='xl' shadow='lg' bgColor='#FFBF15'>
        <Text my={4} mx={6} textColor='white' fontSize='24' fontWeight='bold'>
          日の出 : {isLoading ? '読込中' : `${sunriseTime}`}
        </Text>
      </Box>
      <Box borderRadius='xl' shadow='lg' bgColor='#142C8C'>
        <Text my={4} mx={6} textColor='white' fontSize='24' fontWeight='bold'>
          日の入 : {isLoading ? '読込中' : `${sunsetTime}`}
        </Text>
      </Box>
    </HStack>
  );
};
