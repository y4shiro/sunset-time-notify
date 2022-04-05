import { VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

export const CurrentLocation: VFC = () => {
  const { lat, lon, locationError } = useCurrentPosition();

  return (
    <Box
      my={4}
      p={4}
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <HStack>
        {locationError ? (
          <Text fontSize='20'>位置情報の取得に失敗しました</Text>
        ) : (
          <>
            <Text fontSize='20'>緯度:{lat}</Text>
            <Text fontSize='20'>経度:{lon}</Text>
          </>
        )}
      </HStack>
    </Box>
  );
};
