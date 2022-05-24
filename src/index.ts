import array from "./utilities/array";
import numbers from "./utilities/numbers";
import string from "./utilities/string";

const numArr = [3,4,5,6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = array.addArr(numArr);
const mixArr = array.concatArr(numArr, wordArr);
const myNum = '15' % 2;

console.log(array.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(string.capitalize('the quick brown fox'));
console.log(numbers.multiply('5', 8));
console.log(array.lgNum(mixArr));



