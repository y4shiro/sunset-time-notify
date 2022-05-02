import { VFC } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

export const CurrentLocation: VFC = () => {
  const { latitude, longitude, altitude, locationError } = useCurrentPosition();

  return (
    <HStack
      w='full'
      p={4}
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <FaMapMarkerAlt fontSize='24' />
      {locationError ? (
        <Text fontSize='20'>位置情報の取得に失敗しました</Text>
      ) : (
        <>
          {/** 緯度経度が 0 度の場合は取得中と表示する。レアケースだが、緯度経度 0 の地点は表示できないので、この辺厳密にする場合は取得中ステータスで管理する*/}
          <Text fontSize={{ base: 16, md: 20 }}>緯度:{latitude.toFixed(4) || '取得中'}</Text>{' '}
          <Text fontSize={{ base: 16, md: 20 }}>経度:{longitude.toFixed(4) || '取得中'}</Text>{' '}
          <Text fontSize={{ base: 16, md: 20 }}>
            高度:{altitude ? altitude.toFixed(4) : '未取得'}
          </Text>
        </>
      )}
    </HStack>
  );
};
