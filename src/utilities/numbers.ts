const sum = (arr: number[]) : number => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    })
    return total
  }

const largeNumber = (arr: number[]) : number => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
  }
  export default {sum, largeNumber}