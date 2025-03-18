/**
 * Gets density in percent
 * @param {number} density - density of the entity
 * @param {number} maxDensity - max density of all entities
 * @returns {number} - density in percent
 */
const getDensityInPercent = (density, maxDensity) => Math.round((density * 100) / maxDensity);

/**
 * Gets max density
 * @param {Object[]} entities - array of entities with density property
 * @returns {number} - max density of all entities
 */
const getMaxDensity = (entities) => Math.max(...entities.map(({ density }) => density));

module.exports = { getDensityInPercent, getMaxDensity };
