import React, { useEffect } from "react";
import config from "../config";
import maplibregl from "maplibre-gl";
import "../Styles/MapLibre.css";
import GenerateMapMarkers from "../Utils/GenerateMapMarker";

export default function MapIndex() {
  useEffect(() => {
    
    const map = new maplibregl.Map({
      container: "map", // container id
      style: "https://tiles.stadiamaps.com/styles/osm_bright.json", // style URL
      center: [-0.33769, 53.74515], // starting position [lng, lat]
      zoom: 12, // starting zoom
      maxZoom: 18,
      minZoom: 12,
    });

    // Can make this async? :thinking:
    GenerateMapMarkers(map)
  }, []);
  return <div id="map" style={{ width: "100%", height: "1000px" }}></div>;
}
