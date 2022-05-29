import { VFC } from 'react';
import { Box, Divider, HStack, Text, TextProps, VStack } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { useReverseGeocoding } from '../../hooks/useReverseGeocoding';
import { useCurrentPosition } from '../../hooks/useCurrentPosition';

export const CurrentLocation: VFC = () => {
  const { latitude, longitude, altitude } = useCurrentPosition();
  const placeName = useReverseGeocoding();

  return (
    <HStack
      w='full'
      p={{ base: 3, md: 4 }}
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <FaMapMarkerAlt fontSize='24' />
      <VStack w='full'>
        <Text w='full' px={{ base: 2, md: 4 }} fontSize={{ base: 16, md: 20 }}>
          {placeName}
        </Text>
        <Divider />
        <HStack w='full' textAlign='center' justify='space-evenly'>
          {/** 緯度経度が 0 度の場合は取得中と表示する。レアケースだが、緯度経度 0 の地点は表示できないので、この辺厳密にする場合は取得中ステータスで管理する*/}
          <Box w='33%'>
            <TitleText>緯度</TitleText>
            <ContentText>{latitude.toFixed(4) || '取得中'}</ContentText>
          </Box>
          <Divider height='40px' orientation='vertical' borderColor='gray.300' />

          <Box w='33%'>
            <TitleText>経度</TitleText>
            <ContentText>{longitude.toFixed(4) || '取得中'}</ContentText>
          </Box>
          <Divider height='40px' orientation='vertical' borderColor='gray.300' />

          <Box w='33%'>
            <TitleText>高度</TitleText>
            <ContentText>{altitude ? altitude.toFixed(4) : '未取得'}</ContentText>
          </Box>
        </HStack>
      </VStack>
    </HStack>
  );
};

const TitleText: VFC<TextProps> = (props) => (
  <Text fontSize={{ base: 12, md: 14 }} fontWeight='bold' textColor='gray.400' {...props} />
);
const ContentText: VFC<TextProps> = (props) => (
  <Text fontSize={{ base: 16, md: 20 }} fontWeight='bold' {...props} />
);
