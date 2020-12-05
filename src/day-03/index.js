import { countTrees, multiply } from "./solution.js"

console.log("--- Day 03 ---")
console.log("Part 1 answer:", countTrees(3, 1))
console.log(
  "Part 2 answer:",
  [
    [1, 1],
    [3, 1], // part 1
    [5, 1],
    [7, 1],
    [1, 2],
  ]
    .map(([right, down]) => countTrees(right, down))
    .reduce(multiply)
)
