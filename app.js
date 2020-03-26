function plusMinus(arr) {

  let positiveVal = 0;
  let negativeVal= 0;
  let zeroVal = 0;
  
  for (let i=0; i< arr.length; i++){
    if (arr[i] > 0 ){
      positiveVal += 1
    } else if (arr[i] === 0){
      zeroVal += 1
    } else if (arr[i] < 0){
      negativeVal += 1;
    }
  }
  
  let posFrac = positiveVal/arr.length 
  let toSt = posFrac.toFixed(6)
  let toNu= parseFloat(toSt)
  
  
  let negFrac = negativeVal/arr.length 
  let toStr = negFrac.toFixed(6)
  let toNum = parseFloat(toStr)
  
  let zeroFrac = zeroVal/arr.length 
  let toStri = zeroFrac.toFixed(6)
  let toNumb = parseFloat(toStri)
  
  console.log(toNu)
  console.log(toNum)
  console.log(toNumb)
  }
  
  const exampleOne = [1,2,0,0,-1,-10]
  plusMinus(exampleOne)
  
  
  
  
  // given an array figure out ratios up to 6 decimal points for positive negative and 0 returning three integers
  // iterate through array, if positive add count to positive
  // same with neg add count to neg
  // zero add count to zero 
  
  // fraction them out and arrive at 6th decimal points
  //return three values 
  
  // Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
  
  // Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
  
  // For example, given the array  there are  elements, two positive, two negative and one zero. Their ratios would be ,  and . It should be printed as
  
  // 0.400000
  // 0.400000
  // 0.200000
  // Function Description
  
  // Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
  
  // plusMinus has the following parameter(s):
  
  // arr: an array of integers
  // Input Format
  
  // The first line contains an integer, , denoting the size of the array.
  // The second line contains  space-separated integers describing an array of numbers .
  
  // Constraints
  
  
  
  // Output Format
  
  // You must print the following  lines:
  
  // A decimal representing of the fraction of positive numbers in the array compared to its size.
  // A decimal representing of the fraction of negative numbers in the array compared to its size.
  // A decimal representing of the fraction of zeros in the array compared to its size.
  // Sample Input
  
  // 6
  // -4 3 -9 0 4 1         
  // Sample Output
  
  // 0.500000
  // 0.333333
  // 0.166667
  // Explanation
  
  // There are  positive numbers,  negative numbers, and  zero in the array.
  // The proportions of occurrence are positive: , negative:  and zeros: .