import input from "./input.js"
const MATCH = 2020

export function part1(list = input) {
  for (let i of list) {
    for (let j of list) {
      if (i + j === MATCH) {
        return i * j
      }
    }
  }

  return 0
}

console.log("Part 1 answer:", part1())
