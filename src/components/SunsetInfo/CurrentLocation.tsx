import { VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

type Props = {
  latitude: number;
  longitude: number;
  altitude: number;
  locationError: string;
};

export const CurrentLocation: VFC<Props> = ({ latitude, longitude, altitude, locationError }) => {
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
            {/** 緯度経度が 0 度の場合は取得中と表示する。レアケースだが、緯度経度 0 の地点は表示できないので、この辺厳密にする場合は取得中ステータスで管理する*/}
            <Text fontSize='20'>緯度:{latitude || '取得中'}</Text>{' '}
            <Text fontSize='20'>経度:{longitude || '取得中'}</Text>{' '}
            <Text fontSize='20'>高度:{altitude || '未取得'}</Text>
          </>
        )}
      </HStack>
    </Box>
  );
};
