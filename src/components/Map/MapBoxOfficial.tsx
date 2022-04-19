import { useEffect, useRef, useState, VFC } from 'react';
import { Box } from '@chakra-ui/react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
//@ts-ignore
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

const defaultLatLng = {
  lat: 35.7022589,
  lng: 139.7744733,
};

const MapBoxOfficial: VFC = () => {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState(defaultLatLng.lng);
  const [lat, setLat] = useState(defaultLatLng.lat);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl());
    map.addControl(new MapboxLanguage());

    map.on('move', () => {
      console.log(map.getCenter().lng.toFixed(4));
      setLng(map.getCenter().lng);
      setLat(map.getCenter().lat);
    });

    setMapInstance(map);
  }, []);

  return (
    <>
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
        緯度: {lat.toFixed(4)} | 経度: {lng.toFixed(4)}
      </Box>
      <Box w='100%' h='100%' ref={mapContainer} />
    </>
  );
};

export default MapBoxOfficial;
