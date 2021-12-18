import {useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';

const mapCenter = {
  LAT: 59.96827203642475,
  LNG: 30.31648126964136,
  ZOOM: 15,
};

function useMap(mapRef) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: mapCenter.LAT,
          lng: mapCenter.LNG,
        },
        zoom: mapCenter.ZOOM,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map]);

  return map;
}

export default useMap;
