import { useState, VFC } from 'react';
import { Map as MapType } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultLatLng = {
  lat: 35.7022589,
  lng: 139.7744733,
};

const Map: VFC = () => {
  const [map, setMap] = useState<MapType | null>(null);

  return (
    <>
      <MapContainer
        center={[defaultLatLng.lat, defaultLatLng.lng]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </>
  );
};

export default Map;
