let fruits = ["apple", "banana", "orange", "grape"];

fruits.push("kiwi");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.unshift("lemon");
console.log(fruits); // Output: ["lemon", "apple", "banana", "orange", "grape"]

fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

let index = fruits.indexOf("orange");
console.log(index); // Output: 2

let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["banana", "orange"]
