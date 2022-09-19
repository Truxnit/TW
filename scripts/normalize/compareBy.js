/**
 * Create a comparator function for use with Array.sort(), comparing by the result of a lambda
 * @param propertyFn function that retrieves the comparator value from each item
 * @returns {function(*=, *=): number}
 */
function compareBy(propertyFn) {
  return (objA, objB) => {
    const compareValueA = propertyFn(objA);
    const compareValueB = propertyFn(objB);
    if (compareValueA < compareValueB) {
      return -1;
    } else if (compareValueA > compareValueB) {
      return 1;
    } else {
      return 0;
    }
  };
}

module.exports = {
  compareBy,
};
