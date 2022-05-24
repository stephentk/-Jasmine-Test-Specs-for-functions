"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __importDefault(require("../utilities/array"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var string_1 = __importDefault(require("../utilities/string"));
describe("arrays", function () {
    it("it expects array [5,2,4,3] to remove third value in the array", function () {
        expect(array_1.default.cut3([5, 2, 4, 3])).toEqual([5, 2, 3]);
    });
    it("it expects array [5,2,4,3] to contain 5", function () {
        expect(array_1.default).toContain(5);
    });
    it("it expects array [5,2,4,3,'cat','dog','rabbit','bird'] to find largest number in the arrary", function () {
        expect(array_1.default.lgNum(mixArr)).toBeGreaterThan(4);
    });
});
describe("numbers", function () {
    it("it expects the sum of myNum and numArr to be undefined", function () {
        expect(numbers_1.default.sum(arrSum, myNum)).toBeUndefined();
    });
    it("it expects the multiplication of '5' and 8 to be falsy", function () {
        expect(numbers_1.default.sum(arrSum, myNum)).toBeFalsy();
    });
});
describe("strings", function () {
    it("it expects the the statement 'the quick brown fox' to be capitalize", function () {
        expect(string_1.default.capitalize('the quick brown fox')).toMatch('THE QUICK BROWN FOX');
    });
    it("it expects the string to not be a number", function () {
        expect(string_1.default.capitalize('the quick brown fox')).toBeNaN();
    });
});
function toContain(arg0) {
    throw new Error("Function not implemented.");
}
