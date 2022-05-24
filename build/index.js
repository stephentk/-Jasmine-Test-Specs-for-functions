"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __importDefault(require("./utilities/array"));
var numbers_1 = __importDefault(require("./utilities/numbers"));
var string_1 = __importDefault(require("./utilities/string"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = array_1.default.addArr(numArr);
var mixArr = array_1.default.concatArr(numArr, wordArr);
var myNum = '15' % 2;
console.log(array_1.default.cut3(mixArr));
console.log(numbers_1.default.sum(arrSum, myNum));
console.log(string_1.default.capitalize('the quick brown fox'));
console.log(numbers_1.default.multiply('5', 8));
console.log(array_1.default.lgNum(mixArr));
