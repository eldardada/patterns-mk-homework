const fs = require("fs");

/**
 * Loads data from a JSON file
 * @param filePath - path to the JSON file
 * @returns {unknown} - parsed JSON data
 */
const loadData = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

module.exports = { loadData };
