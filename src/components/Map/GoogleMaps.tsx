import React, { VFC } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from '@chakra-ui/react';

const GoogleMaps: VFC = () => {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  return (
    <Box w='100%' h='100%'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '' }}
        defaultCenter={defaultLatLng}
        defaultZoom={16}
      ></GoogleMapReact>
    </Box>
  );
};

export default GoogleMaps;
