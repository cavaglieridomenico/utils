/**
 *Functionality to be included in a logic that increases or decreases an integer by an integer
 * @param {integer} number
 * @returns integer which will always be within a definable range.
 */
const checkNumber = number => {
  if (number > finalNumber - 1) {
    return (number = startNumber);
  }
  if (number < startNumber) {
    return (number = finalNumber - 1);
  }
  return number;
};

export default checkNumber;
