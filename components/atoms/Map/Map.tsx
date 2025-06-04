'use client';

import { Map as PigeonMap, Marker } from 'pigeon-maps';

interface MapProps {
  center: [number, number];
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <PigeonMap height={400} defaultCenter={center} defaultZoom={13}>
        <Marker width={50} anchor={center} />
      </PigeonMap>
    </div>
  );
};

export default Map;
