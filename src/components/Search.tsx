import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useMapLoader } from '../hooks/useMapLoader';
import { searchLocation } from "../redux/mapSlice";

export default function Search() {
    const dispatch = useDispatch();

    const { isLoaded } = useMapLoader();
    const [autocomplete, setAutocomplete] = React.useState<any>(null);

    const onAutoPlaceChanged = () => {
        if (!autocomplete) return;

        const place = autocomplete.getPlace();
        if (!place) return;

        const { geometry: { location } } = place;

        dispatch(searchLocation({
            address: place.formatted_address,
            coordinates: { lat: location.lat(), lng: location.lng() },
            history: [place.formatted_address]
        }))
    }

    return <>
        <div className="google-autocomplete" >
            <div className="container">
            {
                        isLoaded &&
                        <>
                            <Autocomplete
                                onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                                onPlaceChanged={onAutoPlaceChanged}
                            >
                                <TextField id="search-box" variant="standard" />
                            </Autocomplete>
                        </>
                    }
            </div>
        </div>

    </>;
}