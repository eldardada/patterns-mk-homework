const { getDensityInPercent } = require("./density");

/**
 * Adds density information in percentages for each city
 * @param {Object[]} cities - Array of city objects
 * @param {number} maxDensity - Maximum density value for normalization
 */
const addDensityInPercentToCities = (cities, maxDensity) => {
  cities.forEach(city => {
    city.densityInPercent = getDensityInPercent(city.density, maxDensity);
  });
};

/**
 * Sorts cities by density in descending order
 * @param cities - Array of city objects
 */
const sortCitiesByDensity = (cities) => {
  cities.sort((a, b) => b.densityInPercent - a.densityInPercent);
};

/**
 * Formats city data for display
 * @param {Object} city - City object
 * @param {Object} fieldWidths - Object containing field widths for formatting
 * @returns {string} Formatted city data
 */
const formatCityData = (city, fieldWidths) => {
  let result = '';
  for (const [key, value] of Object.entries(city)) {
    result += value.toString().padStart(fieldWidths[key]);
  }
  return result;
};

module.exports = { addDensityInPercentToCities, sortCitiesByDensity, formatCityData };
