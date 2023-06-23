import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {mapContainer, map, textContainer} from "../styles/_map.module.scss"

export default function Map() {
    const center = useMemo(() => ({ lat: -32.99050870452964, lng: -60.77555390566129 }), []);

    return (
        <div className={mapContainer}>
            <GoogleMap zoom={15} center={center} mapContainerClassName={map}>
                <Marker position={center} />
            </GoogleMap>
            <div className={textContainer}>
            <p> Entre Ríos 1535 - Pérez</p>
            </div>
        </div>
    );
}
