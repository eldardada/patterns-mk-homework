const { loadData } = require("./utils/file");
const { getMaxDensity } = require("./utils/density");
const { 
  addDensityInPercentToCities, 
  sortCitiesByDensity, 
  formatCityData 
} = require("./utils/city");

const fieldWidths = {
  name: 18,
  population: 10,
  area: 8,
  density: 8,
  country: 18,
  densityInPercent: 6,
};

/**
 * Displays cities with density information
 * @param {string} citiesDataPath 
 */
const displayCities = (citiesDataPath) => {
  const cities = loadData(citiesDataPath);
  const maxDensity = getMaxDensity(cities);

  addDensityInPercentToCities(cities, maxDensity);
  sortCitiesByDensity(cities);

  cities.forEach(city => {
    console.log(formatCityData(city, fieldWidths));
  });
};

displayCities("./data/cities.json");
