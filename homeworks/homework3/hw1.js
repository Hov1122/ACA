// Sorting without comparison of elements
// All the elements in the array are integers

const sort = (input) => {
    // your code

  const from = Math.min(...input);
  const to = Math.max(...input) + 1;

  const countOfOccur = Array(to - from).fill(0);
  input.forEach((_, i) => countOfOccur[input[i] - from]++)

  const sorted = [];

  for (let i = from; i < to; i++) {
    for (let j = 0; j < countOfOccur[i - from]; j++)
      sorted.push(i);
  }

  return sorted;
}

console.log(sort([1, 2, 3, -5, 2, 4, 7, 12, 0, 5, -4, -12, 3, 6, 5]));