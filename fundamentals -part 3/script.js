// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Find the amplitude of a given array of temperatures

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function calcAmplitude(arr) {
//   let maxValue = arr[0];
//   let minValue = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') continue;
//     if (arr[i] > maxValue) maxValue = arr[i];
//     if (arr[i] < minValue) minValue = arr[i];
//   }
//   return maxValue - minValue;
// }

// const amplitude = calcAmplitude(temperature);
// console.log(amplitude);

// //Find the amplitude of 2 given arraya of temperatures

// const temperature1 = [3, -1, 'error', 9, 13, 17, 15, 9, 5];
// const temperature2 = [3, -9, 'error', 2, -2, 28, 10, 12, 1];

// function calcAmplitude2(arr1, arr2) {
//   const concatArr = arr1.concat(arr2);

//   let maxValue = concatArr[0];
//   let minValue = concatArr[0];
//   for (let i = 0; i < concatArr.length; i++) {
//     if (typeof concatArr[i] !== 'number') continue;
//     if (concatArr[i] > maxValue) maxValue = concatArr[i];
//     if (concatArr[i] < minValue) minValue = concatArr[i];
//   }

//   return maxValue - minValue;
// }

// const amplitude2 = calcAmplitude2(temperature1, temperature2);
// console.log(amplitude2);

// ----------------------Coding challenge 1- Section 5

// Example imput: [17, 21, 23]
// Example output: ...17°C in 1 days...21°C in 2 days...23°C in 3 days...

const printForecast = function (arr) {
  //loop through each temperature of the array and add string elements to a new array
  //add 1 to the index of the element to find the day
  //join the elements of new array with ...

  let printSentence = [];
  for (let i = 0; i < arr.length; i++) {
    printSentence.push(`${arr[i]}°C in ${i + 1} days`);
  }
  return `...${printSentence.join('...')}...`;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
