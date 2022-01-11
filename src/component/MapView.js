import React, { useState } from 'react' 
import {Link} from 'react-router-dom';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from '../mapStyles';
import parks from '../data/parks';

const containerStyle = {
  width: '100vw',
  height: '90vh'
};

export const center = {
  lat: -37.840935,
  lng: 144.946457
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

export default function MapView() {
  const [selectedPark, setSelectedPark] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    googleMapsApiKey: "AIzaSyC8NxtPpxOWXgvnjId9HRzz-hG9Wlcj6AA"
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      options={options}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      {parks.map((park) => (
        <Marker 
          key={park.id}
          position={{
            lat: park.latitude, 
            lng: park.longitude
          }}
        onClick={() => {
          setSelectedPark(park);
        }}
        />
      ))}
        
      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.latitude, 
            lng: selectedPark.longitude
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <Link to={`/parks/${selectedPark.id}`}>{selectedPark.park_name}</Link><br/>
            {selectedPark.address_id}: 123 Albert Rd, St Kilda<br/>
            {selectedPark.feature_id}: sports, playground, toilet
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) 
    : ( 
    <>
      <p>Not Loaded</p>
    </>
    )
}
