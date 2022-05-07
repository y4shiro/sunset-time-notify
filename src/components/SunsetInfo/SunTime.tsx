import { VFC } from 'react';
import { SimpleGrid, HStack, Text, TextProps } from '@chakra-ui/react';
import { FiSunrise, FiSunset } from 'react-icons/fi';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';
import { useCalcSunTime } from '../../hooks/useCalcSunTime';

export const SunTime: VFC = () => {
  const { latitude, longitude, altitude, isLoading } = useCurrentPosition();
  const { sunriseTime, sunsetTime, isValid } = useCalcSunTime(latitude, longitude, altitude);

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
        {SunTimeText(isLoading, isValid, sunriseTime)}
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
        {SunTimeText(isLoading, isValid, sunsetTime)}
      </HStack>
    </SimpleGrid>
  );
};

const SunTimeText = (isLoading: boolean, isValid: boolean, text: string): TextProps => {
  if (isLoading) return <LoadingText />;
  if (isValid) return <ValidText>{text}</ValidText>;
  return <InValidText>{text}</InValidText>;
};

const LoadingText: VFC<TextProps> = () => (
  <Text textColor='white' fontSize={{ base: 24, md: 26 }} fontWeight='bold'>
    読込中
  </Text>
);

const ValidText: VFC<TextProps> = (props) => (
  <Text textColor='white' fontSize={{ base: 24, md: 26 }} fontWeight='bold' {...props} />
);
const InValidText: VFC<TextProps> = (props) => (
  <Text textColor='white' fontSize={{ base: 16, md: 20 }} fontWeight='bold' {...props} />
);
