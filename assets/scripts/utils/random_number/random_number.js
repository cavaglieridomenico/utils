/**
 *
 * @returns A random integer within a definable range
 */

const getRandomNumber = () => {
  let randomNumber = Math.floor(
    Math.random() * (finalNumber - startNumber) + startNumber
  );
  if (randomNumber === index) {
    randomNumber = index + 1;
  }
  return checkNumber(randomNumber);
};

export default getRandomNumber;
