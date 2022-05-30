import { useCallback, useEffect, useState, VFC } from 'react';
import { Box, Image } from '@chakra-ui/react';

import Map, { NavigationControl, GeolocateControl, MapRef } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useReactMapState } from '../../hooks/useReactMapState';
import cross from '../../images/cross_v6.svg';

const ReactMapGl: VFC = () => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const {
    viewState,
    setViewState,
    setAltitude,
    isMovingMap,
    setIsMovingMapToTrue,
    setIsMovingMapToFalse,
  } = useReactMapState();

  const mapRef = useCallback((ref: MapRef) => {
    if (!ref) return;
    ref.on('load', () => {
      ref.getMap().addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });
      ref.getMap().setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
      setMap(ref.getMap());
    });
  }, []);

  useEffect(() => {
    if (!map) return;
    const elevation = map.queryTerrainElevation([viewState.longitude, viewState.latitude], {
      exaggerated: false,
    });

    if (elevation !== null) {
      setAltitude(elevation);
    }
  }, [map, viewState.latitude, viewState.longitude]);

  return (
    <Box w='100%' h='100%'>
      {process.env.NODE_ENV === 'development' && (
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
      )}
      <Map
        {...viewState}
        ref={mapRef}
        onMove={(e) => setViewState(e.viewState)}
        onMoveStart={() => setIsMovingMapToTrue()}
        onMoveEnd={() => setIsMovingMapToFalse()}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/y4shiro/cl3s0s1dc000o15t57oxmbywx?optimize=true' // 26 まで減らしたやつ
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <NavigationControl position='top-right' />
        <GeolocateControl position='top-right' />
        <Image
          src={cross.src}
          alt='cross image for map'
          w={{ base: 6, md: 8 }}
          h={{ base: 6, md: 8 }}
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
