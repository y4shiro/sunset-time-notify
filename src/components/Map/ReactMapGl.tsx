import { Box } from '@chakra-ui/react';
import { useState, VFC } from 'react';
import Map, { NavigationControl, GeolocateControl } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const defaultLatLng = {
  lat: 35.7022589,
  lng: 139.7744733,
};

const ReactMapGl: VFC = () => {
  const [viewState, setViewState] = useState({
    longitude: defaultLatLng.lng,
    latitude: defaultLatLng.lat,
    zoom: 12,
  });

  return (
    <Box w='100%' h='100%'>
      <Map
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <NavigationControl />
        <GeolocateControl />
      </Map>
    </Box>
  );
};

export default ReactMapGl;
