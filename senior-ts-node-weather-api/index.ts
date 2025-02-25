import { ApiRepository } from "./libs/api.repository.js";

const apiRepository = new ApiRepository();

const locations = [
  { name: "Zürich", lat: 47.36667, long: 8.55 },
  { name: "Luzern", lat: 47.05048, long: 8.30635 },
  { name: "Bern", lat: 46.94809, long: 7.44744 },
  { name: "Basel", lat: 47.55839, long: 7.57327 },
  { name: "Genf", lat: 46.20222, long: 6.14569 },
  { name: "Lausanne", lat: 46.516, long: 6.63282 },
  { name: "St. Gallen", lat: 47.42391, long: 9.37477 },
  { name: "Lugano", lat: 46.01008, long: 8.96004 },
  { name: "Winterthur", lat: 47.5, long: 8.75 },
  { name: "Thun", lat: 46.75118, long: 7.62166 },
];

apiRepository
  .getWeatherFromServiceA(locations[0].lat, locations[0].long)
  .then((data) => console.log(data));

apiRepository
  .getWeatherFromServiceB(locations[1].lat, locations[1].long)
  .then((data) => console.log(data));
