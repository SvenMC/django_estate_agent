import axios from "axios";
import config from "../config";
import { PropertyCoordinate } from "../Types/PropertyCoordinates";
import maplibregl from "maplibre-gl";

export default async function GenerateMapMarkers(map: maplibregl.Map) {
  const getCoordinates = async (): Promise<PropertyCoordinate[]> => {
    const url = `${config.baseApiUrl}api/propertyCoordinates/`;

    return axios
      .get(url)
      .then(function (response) {
        return response.data.results;
      })
      .catch(function (error) {
        console.error(error);
        return [];
      });
  };
  const properties: PropertyCoordinate[] = await getCoordinates();

  properties.map((property, id) => {
    const el = document.createElement("div");
    el.className = `house-marker-${property.property_id}`;
    el.innerHTML = `<img src="${config.mapHouseIconUrl}" alt="house-marker-${property.property_id}" />`;

    const marker = new maplibregl.Marker({
      element: el,
    })
      .setLngLat([property.longitude, property.latitude])
      .addTo(map);
  });
}
