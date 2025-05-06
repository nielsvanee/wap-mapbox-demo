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
      // Gebruik mapRef.current.* om de Mapbox API toe te passen

      // 1) Laad de GeoJSON-bestanden

      // 2) Geef de neighbourhoods styles

      // 3) Geef de points styles
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
