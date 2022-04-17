import React, { useState, VFC } from 'react';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';
import { Box } from '@chakra-ui/react';

const GoogleMaps: VFC = () => {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  const [lat, setLat] = useState(defaultLatLng.lat); // 緯度
  const [lng, setLng] = useState(defaultLatLng.lng); // 経度

  const onClick = (obj: ClickEventValue) => {
    setLat(() => obj.lat);
    setLng(() => obj.lng);
  };

  return (
    <Box w='100%' h='100%'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '' }}
        center={{ lat, lng }}
        defaultZoom={16}
        onClick={onClick}
      ></GoogleMapReact>
    </Box>
  );
};

export default GoogleMaps;
