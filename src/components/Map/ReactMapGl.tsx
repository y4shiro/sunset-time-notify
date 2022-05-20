import { useCallback, useEffect, useState, VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import Map, { NavigationControl, GeolocateControl, Marker, MapRef } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useReactMapState } from '../../hooks/useReactMapState';

const ReactMapGl: VFC = () => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const { viewState, setViewState, isMovingMap, setIsMovingMapToTrue, setIsMovingMapToFalse } =
    useReactMapState();

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
    console.log(elevation);
  }, [map, viewState.latitude, viewState.longitude]);

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
        ref={mapRef}
        onMove={(e) => setViewState(e.viewState)}
        onMoveStart={() => setIsMovingMapToTrue()}
        onMoveEnd={() => setIsMovingMapToFalse()}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/y4shiro/cl279tgti00jb15qjk6klkzrh'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <Marker longitude={139.7} latitude={35.7} color='#000000' />
        <Marker longitude={139.65} latitude={35.65} color='red' />
        <Marker longitude={139.6} latitude={35.6} />
        <GeolocateControl position='bottom-right' />
        <NavigationControl position='bottom-right' />
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
