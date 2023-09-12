import React from "react";
import Map from "./map";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function LoaderMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}
