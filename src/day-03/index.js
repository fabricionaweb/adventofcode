import { part1, part2 } from "./solution.js"

console.log("--- Day 03 ---")
console.log("Part 1 answer:", part1())
console.log(
  "Part 2 answer:",
  (() => {
    const slopes = [
      part2(1, 1),
      part2(3, 1), // part 1
      part2(5, 1),
      part2(7, 1),
      part2(1, 2),
    ]
    return slopes.reduce((acc, curr) => acc * (curr || 1))
  })()
)
