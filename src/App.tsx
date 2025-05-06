// @ts-nocheck
import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css'

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [19.13, 47.4816],
      zoom: 10.38,
    });

    mapRef.current.on('load', () => {
      mapRef.current.addSource('neighbourhoods', {
        type: 'geojson',
        data: './neighbourhoods.geojson',
      });

      mapRef.current.addLayer({
        id: 'neighbourhoods-layer',
        type: 'fill',
        source: 'neighbourhoods',
        paint: {
          'fill-color': '#0080ff',
          'fill-opacity': 0.5,
        },
      });

      mapRef.current.addLayer({
        id: 'neighbourhoods-border',
        type: 'line',
        source: 'neighbourhoods',
        paint: {
          'line-color': '#000000',
          'line-width': 2,
          'line-opacity': 0.8,
        },
      });

      mapRef.current.addSource('my-points', {
        type: 'geojson',
        data: './points.geojson',
      });

      mapRef.current.addLayer({
        id: 'my-points-layer',
        type: 'circle',
        source: 'my-points',
        paint: {
          'circle-radius': 6,
          'circle-color': '#ff0000',
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 1,
          'circle-opacity': 0.9,
        },
      });
    })

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <div id='map-container' ref={mapContainerRef} />
  )
}

export default App
