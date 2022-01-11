import React, { useState } from 'react' 
import {Link} from 'react-router-dom';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from '../mapStyles';
import parks from '../data/parks';

const libraries = ['places'];

// Sets Google Maps API within a container
const containerStyle = {
  width: '100vw',
  height: '100vh'
};

// Centers Google Maps API to Melbourne coordinates
const center = {
  lat: -37.840935,
  lng: 144.946457
};

// mapStyles sets the Google Maps API colour theme
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

export default function MapView() {
  const [selectedPark, setSelectedPark] = useState(null);

  const {isLoaded, loadError} = useLoadScript(
    {
      // API key needs to be stored in env variable
      googleMapsApiKey: "AIzaSyC8NxtPpxOWXgvnjId9HRzz-hG9Wlcj6AA",
      libraries,
    }
  )

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return <div>
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={12}
      center={center}
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
  </div>
}
