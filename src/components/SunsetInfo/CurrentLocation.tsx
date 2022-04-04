import { useEffect, useState, VFC } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

export const CurrentLocation: VFC = () => {
  const [lat, setLat] = useState(0); // Latitude 緯度
  const [lon, setLon] = useState(0); // Longitude 経度
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (err) => {
          setLocationError(err.message);
        },
      );
    }
  }, []);

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
