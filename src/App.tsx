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

      // 1) Voeg de neighbourhoods source toe

      // 2) Geef de neighbourhoods een highlight layer

      // 3) Geef de neighbourhoods een rand layer

      // 4) Voeg de points source toe

      // 5) Voeg de points visueel toe met een layer
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
