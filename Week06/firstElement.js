function getFirstElements(arr, n) {
    if (!Array.isArray(arr)) return [];
    
    if (n === undefined) {
        return arr[0];
    }

    if (n < 0) {
        return [];
    }

    return arr.slice(0, n);
}

// Test cases
console.log(getFirstElements([7, 9, 0, -2]));       // 7
console.log(getFirstElements([], 3));              // []
console.log(getFirstElements([7, 9, 0, -2], 3));    // [7, 9, 0]
console.log(getFirstElements([7, 9, 0, -2], 6));    // [7, 9, 0, -2]
console.log(getFirstElements([7, 9, 0, -2], -3));   // []
