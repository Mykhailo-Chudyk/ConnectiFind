import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
    lat: 51.5074,
    lng: -0.1278
  };

function MyComponent() {
  return (
    <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);