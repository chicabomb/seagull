import React, { useState, useEffect } from 'react';
import { Marker, StaticMap } from 'react-map-gl';

export default function Description({location}) {
  const [viewport, setViewport] = useState({
    zoom: 4,
    bearing: 0,
    pitch: 0,
    height: 500,
    width: 500
  })

  const mapRef = React.createRef()

  useEffect(() => {
    const resize = () => {
      const length = window.innerWidth <= 768 ? window.innerWidth - 100 : 500
      setViewport({
        ...viewport,
        height: length,
        width: length
      })
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  })

  return (
    <StaticMap
      ref={mapRef}
      mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      {...viewport}
      latitude={+location.lat}
      longitude={+location.lon}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={+location.lat}
        longitude={+location.lon}
        offsetLeft={-12}
        offsetTop={-12}>
        <div className="marker" />
      </Marker>
    </StaticMap>
  )
}
