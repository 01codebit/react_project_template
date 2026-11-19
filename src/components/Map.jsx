import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

function MapGL() {
  const mapRef = useRef(null)
  const mapContainerRef = useRef(null)

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
        accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
      container: mapContainerRef.current,
      center: [12.5, 42.00], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 6, // starting zoom
      pitch: 50,
      // style: 'mapbox://styles/mapbox/standard-satellite',
      style: 'mapbox://styles/mapbox/standard',
      config: {
        basemap: {
          font: "Roboto Mono"
        }
      }
    });

    // Terrain ----------------------------------------------------------------------------
/*
    mapRef.current.on('style.load', () => {
      mapRef.current.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
      });
      mapRef.current.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
    });
*/
    // ------------------------------------------------------------------------------------

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (<div id='map-container' ref={mapContainerRef}/>)
}

export default MapGL