import React, { useEffect } from "react";
import config from "../config";
import maplibregl from 'maplibre-gl';

export default function MapIndex() {
    useEffect(() => {
        const map = new maplibregl.Map({
          container: 'map', // container id
          style: 'https://tiles.stadiamaps.com/styles/osm_bright.json', // style URL
          center: [-0.33769, 53.74515], // starting position [lng, lat]
          zoom: 13, // starting zoom
          maxZoom: 14,
          minZoom: 12
      });
    
        const el = document.createElement('div');
        el.className = 'house-icon'; 
        el.innerHTML = `<img src="${config.mapHouseIconUrl}" alt="House" />`;
    
        const marker = new maplibregl.Marker({
          element: el,
          draggable: false,
          scale: 1  ,
          }).setLngLat([-0.33769, 53.74515])
          .addTo(map);
    
      }, []);
    return(
        <div id='map' style={{width: '100%', height: '1000px'}}></div>
    )
}