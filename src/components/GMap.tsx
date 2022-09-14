import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useMapLoader } from '../hooks/useMapLoader';
import type { RootState } from '../redux/store';
import { useSelector } from 'react-redux'

const containerStyle = {
    width: '100%',
    height: 500
};

export default function GMap() {
    const { isLoaded, loadError } = useMapLoader();
    const coordinates = useSelector((state: RootState) => state.map.coordinates)

    const renderMap = () => {
        // wrapping to a function is useful in case you want to access `window.google`
        // to eg. setup options or create latLng object, it won't be available otherwise
        // feel free to render directly if you don't need that
        return <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={12}
            onLoad={() => {}}
            onUnmount={() => {}}
        >
            <Marker
                key={`${coordinates.lat}-${coordinates.lng}`}
                position={{ lat: coordinates.lat, lng: coordinates.lng }}
            />
        </GoogleMap>
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return <>{ isLoaded && renderMap() }</>;
}