import { useJsApiLoader } from '@react-google-maps/api';

const libraries = ["places"];

export const useMapLoader = () =>
    useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "< INSERT GOOGLE KEY HERE >",
        libraries
    })