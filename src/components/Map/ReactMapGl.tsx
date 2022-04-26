import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import Map, { NavigationControl, GeolocateControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useRecoilState } from 'recoil';
import { isMovingMapState, mapViewState } from '../../stores/currentPositionState';

const ReactMapGl: VFC = () => {
  const [viewState, setViewState] = useRecoilState(mapViewState);
  const [isMovingMap, setIsMovingMap] = useRecoilState(isMovingMapState);

  return (
    <Box w='100%' h='100%'>
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
        {`${isMovingMap}`}
      </Box>
      <Map
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        onMoveStart={(e) => setIsMovingMap(true)}
        onMoveEnd={(e) => setIsMovingMap(false)}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/y4shiro/cl279tgti00jb15qjk6klkzrh'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <Marker longitude={139.7} latitude={35.7} color='#000000' />
        <Marker longitude={139.65} latitude={35.65} color='red' />
        <Marker longitude={139.6} latitude={35.6} />
        <NavigationControl />
        <GeolocateControl />
        <AddIcon
          w={8}
          h={8}
          color={'red'}
          position='absolute'
          inset='0'
          margin='auto'
          pointerEvents='none'
        />
      </Map>
    </Box>
  );
};

export default ReactMapGl;
