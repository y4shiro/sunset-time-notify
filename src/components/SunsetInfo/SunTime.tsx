import { VFC } from 'react';
import { SimpleGrid, HStack, Text, TextProps } from '@chakra-ui/react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';
import { useCurrentSuntime } from '../../hooks/useCurrentSuntime';

export const SunTime: VFC = () => {
  const { isLoading } = useCurrentPosition();
  const { sunriseTimeString, sunsetTimeString, isValid } = useCurrentSuntime();

  return (
    <SimpleGrid w='full' columns={2} gap='4'>
      <HStack
        w='full'
        p={{ base: 3, md: 4 }}
        justifyContent='center'
        borderRadius='xl'
        shadow='lg'
        bgColor='#FFBF15'
      >
        <RiSunFill size='32' color='white' />
        {SunTimeText(isLoading, isValid, sunriseTimeString)}
      </HStack>
      <HStack
        w='full'
        p={{ base: 3, md: 4 }}
        justifyContent='center'
        borderRadius='xl'
        shadow='lg'
        bgColor='#142C8C'
      >
        <RiMoonClearFill size='32' color='white' />
        {SunTimeText(isLoading, isValid, sunsetTimeString)}
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
  <Text textColor='white' fontSize={{ base: 22, md: 26 }} fontWeight='bold'>
    読込中
  </Text>
);

const ValidText: VFC<TextProps> = (props) => (
  <Text textColor='white' fontSize={{ base: 22, md: 26 }} fontWeight='bold' {...props} />
);
const InValidText: VFC<TextProps> = (props) => (
  <Text textColor='white' fontSize={{ base: 16, md: 20 }} fontWeight='bold' {...props} />
);
