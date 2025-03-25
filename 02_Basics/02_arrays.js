const superstars1 = ["Roman Reigns", "Seth Rollins", "Dean Ambrose"];
const superstars2 = ["John Cena", "Randy Orton", "Triple H"];

//superstars1.push(superstars2);

// console.log(superstars1);
// console.log(superstars1[3][1]);

//const allStars = superstars1.concat(superstars2);
// console.log(allStars);

const all_new_stars = [...superstars1, ...superstars2];
// console.log(all_new_stars);

const a = [1, 2, 3, [4, 5, 6], 7, 8, 9, [3, 4, 5, [6, 1, 9]]];
const real_a = a.flat(Infinity);
console.log(real_a);

console.log(Array.isArray([1, 2, 3])); // Array.isArray() - Checks if given array is an array, returns true if the value is array, otherwise returns false
console.log(Array.from("Krish")); // Array.from() - creates a new array from an iterable or array-like object
console.log(Array.from({ name: "Krish" })); //interesting

const score1 = 200;
const score2 = 300;
const score3 = 400;

console.log(Array.of(score1, score2, score3)); // Array.of() - creates a new array from a set arguments, ensuring proper array constructions.
