import exp from "constants";
import array  from "../utilities/array";
import numbers from "../utilities/numbers";
import string from "../utilities/string";

describe("arrays",() => {
    it("it expects array [5,2,4,3] to remove third value in the array",()=>{
        expect(array.cut3([5,2,4,3])) .toEqual([5,2,3])       
    })
    it("it expects array [5,2,4,3] to contain 5",()=>{
        expect(array).toContain(5)  
}) 
it("it expects array [5,2,4,3,'cat','dog','rabbit','bird'] to find largest number in the arrary",()=>{
    expect(array.lgNum(mixArr)).toBeGreaterThan(4)   
})

})

describe("numbers",() => {
    it("it expects the sum of myNum and numArr to be undefined",()=>{
    expect (numbers.sum(arrSum, myNum)) .toBeUndefined()
    })

    it("it expects the multiplication of '5' and 8 to be falsy",()=>{
        expect (numbers.sum(arrSum, myNum)) .toBeFalsy()
        })
   })



describe("strings",() => {
    it("it expects the the statement 'the quick brown fox' to be capitalize",()=>{
    expect (string.capitalize('the quick brown fox')) .toMatch('THE QUICK BROWN FOX')
    })

    it("it expects the string to not be a number",()=>{
      expect(string.capitalize('the quick brown fox')).toBeNaN()
        })
   })











function toContain(arg0: number) {
    throw new Error("Function not implemented.");
}

