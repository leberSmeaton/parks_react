import React from 'react'
import {
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";
import mapStyles from '../mapStyles';

const containerStyle = {
  width: '100vw',
  height: '90vh'
};

const center = {
  lat: -37.840,
  lng: 144.946
};

const options = {
  styles: mapStyles
}

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    googleMapsApiKey: "AIzaSyC8NxtPpxOWXgvnjId9HRzz-hG9Wlcj6AA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <>
      </>
    </GoogleMap>
  ) 
    : ( 
    <>
      <p>Not Loaded</p>
    </>
    )
}
