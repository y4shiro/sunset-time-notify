import { useEffect, useRef, useState, VFC } from 'react';
import { Box } from '@chakra-ui/react';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useReactMapState } from '../../hooks/useReactMapState';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '';

const MapboxGl: VFC = () => {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const { viewState, setViewState, isMovingMap, setIsMovingMapToTrue, setIsMovingMapToFalse } =
    useReactMapState();

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/y4shiro/cl279tgti00jb15qjk6klkzrh',
      center: [viewState.longitude, viewState.latitude],
      zoom: 9,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    setMapInstance(map);
  }, []);

  useEffect(() => {
    if (!mapInstance) return;
    mapInstance.on('move', (e) => {
      setViewState({
        latitude: e.target.getCenter().lat,
        longitude: e.target.getCenter().lng,
        zoom: e.target.getZoom(),
      });
    });
    mapInstance.on('movestart', () => {
      setIsMovingMapToTrue();
    });
    mapInstance.on('moveend', () => {
      setIsMovingMapToFalse();
    });
  }, [mapInstance, setViewState]);

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
      <Box w='100%' h='100%'>
        <div style={{ height: '100%' }} ref={mapContainer} />
      </Box>
    </Box>
  );
};

export default MapboxGl;
