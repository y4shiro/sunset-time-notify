import { VFC } from 'react';
import { Box, Divider, HStack, Text, TextProps, VStack } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { ReverseGeocoding } from './ReverseGeocoding';
import { useCurrentPosition } from '../../hooks/useCurrentPosition';

export const CurrentLocation: VFC = () => {
  const { latitude, longitude, altitude, locationError } = useCurrentPosition();

  return (
    <HStack
      w='full'
      p='4'
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
        <VStack w='full'>
          <ReverseGeocoding />
          <Divider />
          <HStack w='full' textAlign='center' justify='space-evenly'>
            {/** 緯度経度が 0 度の場合は取得中と表示する。レアケースだが、緯度経度 0 の地点は表示できないので、この辺厳密にする場合は取得中ステータスで管理する*/}
            <Box>
              <TitleText>緯度</TitleText>
              <ContentText>{latitude.toFixed(4) || '取得中'}</ContentText>
            </Box>
            <Divider height='40px' orientation='vertical' borderColor='gray.300' />

            <Box>
              <TitleText>経度</TitleText>
              <ContentText>{longitude.toFixed(4) || '取得中'}</ContentText>
            </Box>
            <Divider height='40px' orientation='vertical' borderColor='gray.300' />

            <Box>
              <TitleText>高度</TitleText>
              <ContentText>{altitude ? altitude.toFixed(4) : '未取得'}</ContentText>
            </Box>
          </HStack>
        </VStack>
      )}
    </HStack>
  );
};

const TitleText: VFC<TextProps> = (props) => (
  <Text fontSize={{ base: 12, md: 14 }} textColor='gray.400' {...props} />
);
const ContentText: VFC<TextProps> = (props) => <Text fontSize={{ base: 16, md: 20 }} {...props} />;
