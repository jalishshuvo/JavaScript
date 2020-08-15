//17.  EX -1 create a function that returns a array between min and max number

const numbers = arrayFromRange(1, 10);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// 18. create a function same as include

const num = [1, 2, 3, 4];

console.log(includes(num, 2));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

// 19. exclude number from an array

const num2 = [1, 2, 3, 4, 5, 6, 1];

const output = except(num2, [1, 2, 3, 9]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let item of array) if (!excluded.includes(item)) output.push(item);
  return output;
}

// 20. Move an element

const num3 = [1, 2, 3, 4];

// console.log(num3.splice(0, 1));

const output2 = move(num3, 0, 1);

console.log("output2", output2);

function move(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error("invalid offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// 21. COUNT OCCURENCE

const num4 = [1, 2, 3, 2, 4, 1, 1];

const count = countOccurance(num4, 2);

console.log("count", count);

// for of loop :
// function countOccurance(array, searchElement) {
//   let count = 0;
//   for (let item of array) if (item === searchElement) count++;
//   return count;
// }

// reduce method:

function countOccurance(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurance = currentValue === searchElement ? 1 : 0;
    console.log(accumulator, currentValue, searchElement);
    return accumulator + occurance;
  }, 0);
}

// 22.GET MAX

const num5 = [1, 2, 3, 4];

const max = getMax([1, 2, 3]);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}

// Movie filtering

// All the movie in 2020
// rating  > 4
// decending order
// show title
// result = a, c

const movies = [
  { title: "Mission impossible", year: 2020, rating: 4.9 },
  { title: "Salt", year: 2020, rating: 3.5 },
  { title: "Gladiator", year: 2020, rating: 4.4 },
  { title: "Troy", year: 2019, rating: 4.7 },
];

// const titles = movies
//   .filter((m) => m.year === 2020 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map((m) => m.title);
// console.log(titles);

const titles = movies
  .filter((m) => m.year === 2020 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .map((m) => m.title)
  .reverse();

console.log(titles);
