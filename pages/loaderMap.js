import React, { useEffect, useState } from "react";
import Map from "./map";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function LoaderMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  let [onCS, setOnCS] = useState(false);

  useEffect(() => {
    setOnCS(true);
  }, []);

  if (!isLoaded && onCS) {
    return <div>Loading...</div>;
  } else if (onCS) {
    return <Map />;
  }
}
