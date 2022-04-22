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
  const [isMoving, setIsMoving] = useState(false);

  return (
    <Box w='100%' h='80vh'>
      <Box
        backgroundColor='rgba(35,55,75,0.8)'
        color='white'
        fontFamily='monospace'
        fontSize='16'
        px='4'
        py='2'
        m='2'
        borderRadius='8'
        position='absolute'
        zIndex='1'
      >
        緯度: {viewState.latitude.toFixed(4)} | 経度: {viewState.longitude.toFixed(4)} | 移動中:
        {`${isMoving}`}
      </Box>
      <Map
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        onMoveStart={(e) => setIsMoving(true)}
        onMoveEnd={(e) => setIsMoving(false)}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/y4shiro/cl279tgti00jb15qjk6klkzrh'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <NavigationControl />
        <GeolocateControl />
      </Map>
    </Box>
  );
};

export default ReactMapGl;
