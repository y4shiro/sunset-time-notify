import { useEffect, useRef, useState, VFC } from 'react';
import { Box } from '@chakra-ui/react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';

const defaultLatLng = {
  lat: 35.7022589,
  lng: 139.7744733,
};

const MapBoxOfficial: VFC = () => {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      // style: mapStyle,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [defaultLatLng.lng, defaultLatLng.lat],
      zoom: 12,
    });

    setMapInstance(map);
  }, []);

  return <Box w='100%' h='100%' ref={mapContainer} />;
};

export default MapBoxOfficial;
