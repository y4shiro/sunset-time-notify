import { useMemo, VFC } from 'react';
import dynamic from 'next/dynamic';
import Map from './Map';

const ReactLeaflet = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('./Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return <Map />;
};

export default ReactLeaflet;
