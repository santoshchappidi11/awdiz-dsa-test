// Q1)--------------------------------------------------------------->

// let nums = [3, 2, 2, 3];
// let val = 3;
// // output: 2, (nums = [2, 2, _, _]);
// const removeAllOcurrences = (nums, val) => {
//   const sortedArray = nums.sort((a, b) => a - b);
//   let finalArray = [];

//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] == val) {
//       finalArray.push("_");
//     } else {
//       finalArray.push(sortedArray[i]);
//     }
//   }

//   return finalArray;
// };

// console.log(removeAllOcurrences(nums, val));

// Q2)------------------------------------------------------------->

// let x = 121;
// Output:true

// const checkIsPalindrome = (x) => {
//   let palindromeString = x.toString();

//   let finalPalindrome = palindromeString.split("").reverse().join("");

//   console.log(finalPalindrome);

//   if (finalPalindrome == x) {
//     return true;
//   }

//   return false;
// };

// console.log(checkIsPalindrome(x));

// Q3)-------------------------------------------------------->

// let nums = [1, 2, 3, 4, 5];

// // Output:15

// const calculateSum = (nums) => {
//   let totalSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     totalSum = totalSum + nums[i];
//   }

//   return totalSum;
// };

// console.log(calculateSum(nums));

// Q4.----------------------------------------------------->

// let x = "heh";
// // Output:true

// const checkIsPalindrome = (x) => {
//   let finalPalindrome = x.split("").reverse().join("");

//   console.log(finalPalindrome);

//   if (finalPalindrome == x) {
//     return true;
//   }

//   return false;
// };

// console.log(checkIsPalindrome(x));

// Q5.------------------------------------------------------>
// let nums = [7, 8, 9, 4, 5, 6];

// const reverseArray = (nums) => {
//   let finalArray = [];

//   for (let i = nums.length - 1; i >= 0; i--) {
//     finalArray.push(nums[i]);
//   }

//   return finalArray;
// };

// console.log(reverseArray(nums));

// Q6.--------------------------------------------------------->

// let nums = [1, 5, 5, 5, 3, 4];

// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length; ) {
//     if (nums[i] == nums[i + 1]) {
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }

//   //   let finalArray = [...new Set(nums)];

//   return nums;
// };

// console.log(removeDuplicates(nums));

// Q7.----------------------------------------------------------------------->

// let num = 5;

// const findFactorial = (num) => {
//   let sum = 1;

//   if (num < 0) {
//     return -1;
//   }
//   if (num == 0) {
//     return 1;
//   } else {
//     for (let i = num; i >= 1; i--) {
//       sum = sum * i;
//     }
//     return sum;
//   }
// };

// console.log(findFactorial(num));

// Q8.------------------------------------------------------------>

// let primeNum = 3;

// const checkIsPrime = (num) => {
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(checkIsPrime(primeNum));

// Q9.----------------------------------------------------------->

// let factNum = 5;

// const findFactorial = (num) => {
//   if (num < 0 || num < 1) {
//     return 1;
//   }

//   let sum = 1;

//   let i = num;

//   while (i > 1) {
//     sum = sum * i;
//     i--;
//   }

//   return sum;
// };

// console.log(findFactorial(factNum));

// Q10.----------------------------------------------------------->

// let nums = [7, 8, 9, 4, 6, 4, 5, 3];

// const sortNumbers = (nums) => {
//   let finalArray = nums.sort((a, b) => a - b);

//   return finalArray;
// };

// console.log(sortNumbers(nums));

// Q11.-------------------------------------------------------------------------------->

// let nums = [2, 4, 1, 3, 6, 7];
// // Output:5

// const findMissingNumber = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (i != 0) {
//       if (!nums.includes(i)) {
//         return i;
//       }
//     }
//   }
// };

// console.log(findMissingNumber(nums));

// Q12.--------------------------------------------------------------------------------->

// let haystack = "sadbutsad";
// let needle = "bad";

// const checkTheOccurence = (haystack, neddle) => {
//   if (haystack.includes(neddle)) {
//     return 0;
//   }

//   return -1;
// };

// console.log(checkTheOccurence(haystack, needle));

// Q13.----------------------------------------------------------------------------------->

// let nums = [5, 7, 7, 8, 8, 10];

// let target = 8;

// Output: [3, 4];

// const findTargetStartEndPos = (nums, target) => {
//   let finalArray = [];

//   let flag = false;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       flag = true;
//       finalArray.push(i);
//     }
//   }

//   if (flag == false) {
//     finalArray.push(-1, -1);
//   }

//   return finalArray;
// };

// console.log(findTargetStartEndPos(nums, target));

// Q15.------------------------------------------------------->

// let X = "hello";

// const removeDuplicateString = (X) => {
//   const result = [...new Set(X)].join("");

//   return result;
// };

// console.log(removeDuplicateString(X));
