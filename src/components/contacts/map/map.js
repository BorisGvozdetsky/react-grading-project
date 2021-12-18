import React, { useEffect, useRef } from 'react';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconMarker from 'assets/img/icon-blip.svg';
import useMap from '../../../hooks/useMap';

const iconSize = {
  WIDTH: 56,
  HEIGHT: 70,
};

const customIcon = leaflet.icon({
  iconUrl: iconMarker,
  iconSize: [iconSize.WIDTH, iconSize.HEIGHT],
  iconAnchor: [iconSize.WIDTH / 2, iconSize.HEIGHT]
});

const markerPosition = {
  LAT: 59.96827203642475,
  LNG: 30.31648126964136,
};

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: markerPosition.LAT,
        lng: markerPosition.LNG,
      });

      marker
        .setIcon(customIcon)
        .addTo(map)
    }
  }, [map])


  return (
    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  )
};

export default Map;
