import { useCallback, useState, VFC } from 'react';
import { Box } from '@chakra-ui/react';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultLatLng = {
  lat: 35.7022589,
  lng: 139.7744733,
};

const ReactGoogleMapsAPI: VFC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <Box w='100%' h='100%'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultLatLng}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default ReactGoogleMapsAPI;
