import {
  getLargestEvenNumber,
  getLargestEvenNumber2,
  replaceFirstNumber,
  isLeapYear,
  isContainedObject,
  parseCSV,
  getRandomHexColor,
  isForAllItems,
  isForAllItems2,
  getAlphabeticalOrder,
  VOWELS,
  getVowelsNumber,
} from "./utils/exercises/exercises.js";

// console.log(getLargestEvenNumber([1, 2, 8, 9, 16, 3, 4]));
// console.log(getLargestEvenNumber2([1, 2, 8, 9, 16, 3, 4]));
// console.log(replaceFirstNumber("gat2to12"));
//console.log(isLeapYear(2032));
const obj1 = { a: 1, b: 1, c: 1 };
const obj2 = { a: 1, b: 2, c: 1 };
const obj3 = { a: 1, b: 1, d: 1, c: 2 };
console.log(isContainedObject(obj1, obj2));
console.log(isContainedObject(obj1, obj3));

const stringCSV = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
console.log(parseCSV(stringCSV));

console.log(getRandomHexColor());

document.body.style = `background-color: ${getRandomHexColor()}`;

const isGraterThanZero = (number) => number > 0;
const list = [-1, 1, 2, 3, 4, 5, 100];
console.log(isForAllItems(list, isGraterThanZero));
console.log(isForAllItems2(list, isGraterThanZero));

console.log(getAlphabeticalOrder("machine"));

console.log(getVowelsNumber(VOWELS, "dagahe"));

const getNumberOfCoins = (amount, coins = [25, 10, 5, 2, 1]) => {
  let necessaryCoins = [];
  let rest = amount;
  //debugger;
  coins.forEach((coin) => {
    if (rest - coin >= 0) {
      necessaryCoins.push(coin);
      rest = rest - coin;
    }
    while (rest - coin >= 0 && rest >= coin) {
      necessaryCoins.push(coin);
      rest = rest - coin;
    }
  });
  return necessaryCoins;
};

console.log(getNumberOfCoins(100, [25, 10, 5, 2, 1]));
