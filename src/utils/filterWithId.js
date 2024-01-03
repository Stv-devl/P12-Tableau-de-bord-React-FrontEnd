/**
 * Utility function to filter an array of object with the id number
 * @param {Object[]} data - The array of objects to be filtered.
 * @param {number} id - The Id that filtered data
 * @returns {Object[]} A filtered array containing objects where 'userId' or 'id' matches the specified Id.
 */

const filterWithId = (data, id) => {
  return id && data.filter((item) => item.userId === id || item.id === id);
};

export default filterWithId;
