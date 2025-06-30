// 1. join array into a string
let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));   // "Red,Green,White,Black"
console.log(myColor.toString());  // "Red,Green,White,Black"
console.log(myColor.join("+"));   // "Red+Green+White+Black"

// 2. most frequent element in an array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freq = {};
let maxChar = '', maxCount = 0;

arr1.forEach(el => {
  freq[el] = (freq[el] || 0) + 1;
  if (freq[el] > maxCount) {
    maxChar = el;
    maxCount = freq[el];
  }
});

console.log(`${maxChar} ( ${maxCount} times )`);

// 3. truncate a string
function truncateString(str, num) {
  return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4));  // "Robi"

// 4. capitalize each word in a string
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords('js string exercises'));  // "Js String Exercises"

// 5. filter values between a range in an array
function arrBetween(min, max, arr) {
  return arr.filter(x => x > min && x < max);
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));     // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));  // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78]));          // []

// 6. find index of an element in an array
function findIndex(arr, val) {
  return arr.indexOf(val);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));          // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));      // 1
console.log(findIndex(["a", "g", "y", "d"], "d"));                      // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0
