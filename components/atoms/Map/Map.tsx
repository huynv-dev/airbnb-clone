'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl:          'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl:        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

interface MapProps {
  center?: [number, number]; // [lat, lng]
}

const Map: React.FC<MapProps> = ({ center }) => {
  useEffect(() => {
    // Fix SSR hydration warning
    if (typeof window === 'undefined') return;
  }, []);

  return (
    <MapContainer
      center={center || [51, 0]}
      zoom={center ? 10 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && (
        <Marker position={center} />
      )}
    </MapContainer>
  );
};

export default Map;
