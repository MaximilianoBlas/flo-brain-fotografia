import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {
    mapContainer,
    map,
    textContainer,
    titleContainer, p, h2
} from "../styles/_map.module.scss";

export default function Map() {
    const center = useMemo(() => ({ lat: -32.99050870452964, lng: -60.77555390566129 }), []);

    return (
        <div className={mapContainer}>
            <div className={titleContainer}>
                <h2 className={h2}>Mapa</h2>
            </div>
            <GoogleMap zoom={13} center={center} mapContainerClassName={map}>
                <Marker position={center} />
            </GoogleMap>
            <div className={textContainer}>
                <p className={p}> Entre Ríos 1535 - Pérez</p>
            </div>
        </div>
    );
}
