import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'now-env';

export default function Map({location}) {
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
        latitude: +location.lat,
        longitude: +location.lon,
        height: length,
        width: length
      })
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [])

  return (
    <ReactMapGL
      ref={mapRef}
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={+location.lat}
        longitude={+location.lon}
        offsetLeft={-12}
        offsetTop={-12}>
        <div className="marker" />
      </Marker>
    </ReactMapGL>
  )
}
