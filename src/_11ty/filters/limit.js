/**
 * Limit an array of objects
 * 
 * @param {*} arr the array to slice / limit
 * @param {*} limit the number of items to return
 * @returns 
 */

function limit(arr, limit) {
  if (!Array.isArray(arr)) { throw new Error("The limit filer expects an array") };
  const slicedArray = arr.slice(0, limit);
  return slicedArray;
};

export { limit }